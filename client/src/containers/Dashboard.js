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

const tempSocket = new WebSocket('ws://devices.webofthings.io/pi/sensors/temperature');

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: d.devices,
      deviceParams: d.deviceParams,
      vizs: d.vizs,
      vizParams: d.vizParams
    };
  }

  addDevice = device => {
    // console.log('deviceAdded');
    this.setState({
      devices: [...this.state.devices, device]
    });
  };
  addViz = viz => {
    // console.log('viz to be Added', viz);
    // console.log('dash vizs state', this.state);
    this.setState({
      vizs: [...this.state.vizs, viz]
    });
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
  componentDidMount() {
    tempSocket.onmessage = event => {
      const result = JSON.parse(event.data);
      this.addDataPoint(result);
    };
  }
  render() {
    return (
      <div className="dashboard">
        <DevicePanel
          devices={this.state.devices}
          actions={this.addDevice}
          params={this.state.deviceParams}
        />
        <VizPanel vizs={this.state.vizs} actions={this.addViz} params={this.state.vizParams} />
      </div>
    );
  }
}

export default Dashboard;
