/** Dashboard Container :
The Dahshboard contains the state allowing to display the Thing list,
 the Viz Grid and the control panels
 For now the data is pulled from a localFile.
 Later part of the data will be stored in cache and DB
 */

import React, { Component } from 'react';
import ThingPanel from '../components/dashboard/ThingPanel';
import VizPanel from '../components/dashboard/VizPanel';
import '../assets/Dashboard.css';
import * as d from '../tempData.js';
import discover from '../helpers/discover';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [],
      thingParams: d.thingParams,
      selected: { item: { id: '', name: '' }, parent: '' },
      vizs: [],
      vizParams: d.vizParams
    };
  }
  discover = url => {
    // console.log('discovering url', url);
    discover(url).then(res => {
      let newThings = this.state.things;
      newThings.push(res);
      this.setState({
        things: newThings
      });
    });
  };

  delThing = id => {
    // console.log('Deleting thing...', id);
    this.setState({
      things: this.state.things.filter(thing => thing.id !== id)
    });
  };
  addViz = (viz, source) => {
    // Creating WebSocket using viz and source Data

    viz.vizType === 'property'
      ? viz.dataType === 'ws'
        ? (viz.socket = this.createSocket(viz, source))
        : (viz.data = source.data)
      : (viz = this.createController(viz, source));

    this.setState({
      vizs: [...this.state.vizs, viz]
    });
  };

  delViz = (id, socket) => {
    // console.log('Deleting viz...', id);
    if (Object.keys(socket).length > 0) {
      // console.log('Closing Socket...');
      socket.close();
    }
    this.setState({
      vizs: this.state.vizs.filter(viz => viz.id !== id)
    });
  };
  createController = (viz, source) => {
    viz.action = source.values;
    viz.actionUrl =
      (source.customFields.secure ? 'https://' : 'http://') +
      source.customFields.hostname +
      '/actions/' +
      viz.source_id +
      '?token=cKXRTaRylYWQiF3MICaKndG4WJMcVLFz';

    return viz;
  };
  createSocket = (viz, source) => {
    const wsUrl =
      (source.customFields.secure ? 'wss://' : 'ws://') +
      source.customFields.hostname +
      '/properties/' +
      viz.source_id +
      '?token=cKXRTaRylYWQiF3MICaKndG4WJMcVLFz';

    const socket = new WebSocket(wsUrl);

    socket.onopen = function (message) {
      // console.log('Subscribed to Property : ' + wsUrl);
    };

    socket.onmessage = event => {
      const result = JSON.parse(event.data);
      // console.log('Message :', result);
      this.addDataPoint(result, viz.id);
    };

    socket.onerror = function (error) {
      console.log('Error while connecting to a WebSocket!');
      console.log(error);
    };
    return socket;
  };
  addDataPoint = (dataPoint, vizID) => {
    let vizs = this.state.vizs;
    vizs.forEach(viz => {
      if (viz.id === vizID) {
        viz.data.push(dataPoint);
      }
    });
    // console.log(vizs);
    this.setState({ vizs: vizs });
  };
  toogleSelectedThing = name => {
    // console.log('toogleSelectedThing - ', name);
    let tempThings = this.state.things;
    tempThings.forEach(thing => {
      if (thing.name === name) {
        if (!this.state.selected.item.name) {
          // console.log('setting thing');
          this.setState({
            selected: { item: thing, parent: 'thing' }
          });
        } else {
          // console.log('clearing thing');
          this.setState({
            selected: {
              item: {
                id: '',
                name: ''
              },
              parent: 'thing'
            }
          });
        }
      }
    });
  };
  toogleSelectedViz = id => {
    console.log('toogleSelectedThing - ', id);
    let tempVizs = this.state.vizs;
    tempVizs.forEach(viz => {
      if (viz.id === id) {
        if (!this.state.selected.item.id) {
          // console.log('setting viz');
          this.setState({
            selected: { item: viz, parent: 'viz' }
          });
        } else {
          // console.log('clearing viz');
          this.setState({
            selected: {
              item: {
                id: '',
                name: '',
                source_id: '',
                model: '',
                x: '',
                y: '',
                data: [],
                design: ''
              },
              parent: 'viz'
            }
          });
        }
      }
    });
  };

  populateParams = things => {
    // Adding New things as input for SourceThings Select Param
    let newParams = this.state.vizParams;
    // getting the index for source_id
    let index = newParams.findIndex(p => p.name === 'source_id');
    let newSources = newParams[index];

    // Adding an entry for all Things in state
    things.forEach(thing => {
      Object.keys(thing.properties).forEach(property => {
        // TODO: Add a check for unique things
        newSources.options.push({ id: property, value: property, display: property });
      });
      Object.keys(thing.actions).forEach(action => {
        // TODO: Add a check for unique things
        newSources.options.push({ id: action, value: action, display: action });
      });
    });

    return newParams;
  };
  componentWillMount() {
    // testing urls
    const demoThingUrl = 'http://gateway.webofthings.io';
    // const demoThingUrl = 'http://things.webofthings.io/pi/sensors/temperature';
    // const demoBadUrl = 'http://things.webofthings.io/pi/sensors';
    discover(demoThingUrl).then(res => {
      let newThings = this.state.things;
      newThings.push(res);
      this.setState({
        things: newThings
        // vizParams: this.populateParams(newThings)
      });
    });
  }

  render() {
    const vizActions = {
      addViz: this.addViz,
      delViz: this.delViz,
      updateViz: this.updateViz,
      toogleSelectedViz: this.toogleSelectedViz
    };
    const devActions = {
      discover: this.discover,
      delThing: this.delThing,
      toogleSelectedThing: this.toogleSelectedThing
    };
    return (
      <div className="dashboard">
        <ThingPanel
          things={this.state.things}
          actions={devActions}
          params={this.state.thingParams}
          selected={this.state.selected}
        />
        <VizPanel
          vizs={this.state.vizs}
          things={this.state.things}
          actions={vizActions}
          params={this.state.vizParams}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default Dashboard;
