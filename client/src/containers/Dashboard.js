import React, { Component } from 'react';
import DevicePanel from '../components/dashboard/DevicePanel';
import VizPanel from '../components/dashboard/VizPanel';
import '../assets/Dashboard.css';
import * as data from '../tempData.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.addDevice = this.addDevice.bind(this);
    this.addViz = this.addViz.bind(this);
    this.state = {
      devices: data.devices,
      deviceParams: data.deviceParams,
      vizs: data.vizs,
      vizParams: data.vizParams
    };
  }
  componentDidMount() {
    console.log('dashboard state:', this.state);
  }
  addDevice(device) {
    // console.log('deviceAdded');
    this.setState({
      devices: [...this.state.devices, device]
    });
  }
  addViz(viz) {
    console.log('viz to be Added', viz);
    console.log('dash vizs state', this.state);
    this.setState({
      vizs: [...this.state.vizs, viz]
    });
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
