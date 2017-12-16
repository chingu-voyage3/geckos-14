import React, { Component } from 'react';
import DevicePanel from '../components/dashboard/DevicePanel';
import VizPanel from '../components/dashboard/VizPanel';
import '../assets/Dashboard.css';
import * as data from '../tempData.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.addDevice = this.addDevice.bind(this);
    this.state = {
      devices: data.devices,
      vizs: data.vizs
    };
  }
  componentDidMount() {}
  addDevice(device) {
    // console.log('deviceAdded');
    this.setState({
      devices: [...this.state.devices, device]
    });
  }
  addViz(viz) {
    // console.log('vizAdded');
    this.setState({
      vizs: [...this.state.vizs, viz]
    });
  }
  render() {
    return (
      <div className="dashboard">
        <DevicePanel devices={this.state.devices} actions={this.addDevice} />
        <VizPanel vizs={this.state.vizs} actions={this.addViz} />
      </div>
    );
  }
}

export default Dashboard;
