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
      selected: {},
      vizs: [],
      vizParams: d.vizParams
    };
  }
  discover = url => {
    console.log('discovering url', url);
  };
  editThing = (id, newProps) => {
    // TODO: Add function that updates a Thing
  };
  addThing = thing => {
    // console.log('thingAdded');
    this.setState({
      things: [...this.state.things, thing]
    });
  };
  delThing = id => {
    // TODO: Add function that deletes a Thing
  };
  addViz = viz => {
    // console.log('viz to be Added', viz);
    // console.log('dash vizs state', this.state);
    this.setState({
      vizs: [...this.state.vizs, viz]
    });
  };
  editViz = (id, newProps) => {
    // TODO: Add function that updates a Viz
  };
  delThing = id => {
    // TODO: Add function that deletes a Thing
  };
  toogleSelectedThing = id => {
    console.log('toogleSelectedThing - ', id);
    let tempThings = this.state.things;
    for (var i = 0; i < tempThings.length; i++) {
      if (tempThings[i].id === id) {
        this.setState({
          selected: tempThings[i]
        });
      }
    }
  };
  toogleSelectedViz = id => {
    console.log('toogleSelectedViz - ', id);
    let tempVizs = this.state.vizs;
    for (var i = 0; i < tempVizs.length; i++) {
      if (tempVizs[i].id === id) {
        this.setState({
          selected: tempVizs[i]
        });
      }
    }
  };
  addDataPoint = dataPoint => {
    let tempViz = this.state.vizs;
    for (var i = 0; i < tempViz.length; i++) {
      if (tempViz[i].name === dataPoint.name) {
        tempViz[i].data.push({
          date: tempViz[0].data.length,
          temp: dataPoint.value
        });
      }
    }
    this.setState({
      vizs: tempViz
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
        things: newThings,
        vizParams: this.populateParams(newThings)
      });
    });
  }

  render() {
    const vizActions = {
      addViz: this.addViz,
      toogleSelectedViz: this.toogleSelectedViz
    };
    const devActions = {
      discover: this.discover,
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
