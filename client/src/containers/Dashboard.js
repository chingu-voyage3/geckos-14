/** Dashboard Container :
The Dahshboard contains the state allowing to display the Device list,
 the Viz Grid and the control panels
 For now the data is pulled from a localFile.
 Later part of the data will be stored in cache and DB
 */

import React, { Component } from 'react';
import DevicePanel from '../components/dashboard/DevicePanel';
import VizPanel from '../components/dashboard/VizPanel';
import '../assets/Dashboard.css';
import * as d from '../tempData.js';
import discover from '../helpers/discover';

const tempSocket = new WebSocket('ws://devices.webofthings.io/pi/sensors/temperature');

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: d.devices,
      deviceParams: d.deviceParams,
      selected: {},
      vizs: d.vizs,
      vizParams: d.vizParams
    };
  }
  editDevice = (id, newProps) => {
    // TODO: Add function that updates a Device
  };
  addDevice = device => {
    // console.log('deviceAdded');
    this.setState({
      devices: [...this.state.devices, device]
    });
  };
  delDevice = id => {
    // TODO: Add function that deletes a Device
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
  delDevice = id => {
    // TODO: Add function that deletes a Device
  };
  toogleSelectedDevice = id => {
    console.log('toogleSelectedDevice - ', id);
    let tempDevices = this.state.devices;
    for (var i = 0; i < tempDevices.length; i++) {
      if (tempDevices[i].id === id) {
        this.setState({
          selected: tempDevices[i]
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
  componentWillMount() {
    discover('http://devices.webofthings.io/pi/');
  }
  componentDidMount() {
    // tempSocket.onmessage = event => {
    //   const result = JSON.parse(event.data);
    //   this.addDataPoint(result);
    // };
  }

  render() {
    const vizActions = {
      addViz: this.addViz,
      toogleSelectedViz: this.toogleSelectedViz
    };
    const devActions = {
      addDevice: this.addDevice,
      toogleSelectedDevice: this.toogleSelectedDevice
    };
    return (
      <div className="dashboard">
        <DevicePanel
          devices={this.state.devices}
          actions={devActions}
          params={this.state.deviceParams}
          selected={this.state.selected}
        />
        <VizPanel
          vizs={this.state.vizs}
          devices={this.state.devices}
          actions={vizActions}
          params={this.state.vizParams}
          selected={this.state.selected}
        />
      </div>
    );
  }
}

export default Dashboard;
