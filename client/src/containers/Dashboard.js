import React, { Component } from 'react';
import DevicePanel from '../components/dashboard/DevicePanel';
import VizPanel from '../components/dashboard/VizPanel';
import '../assets/Dashboard.css';

const devices = [
  {
    name: 'LondonTemp',
    url: 'http://devices.webofthings.io/pi/sensors/temperature/',
    type: 'Thermometer'
  },
  {
    name: 'LondonHumidity',
    url: 'http://devices.webofthings.io/pi/sensors/humidity/',
    type: 'Humidity'
  },
  { name: 'LondonIR', url: 'http://devices.webofthings.io/pi/sensors/pir/', type: 'InfraRed' }
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.addDevice = this.addDevice.bind(this);
    this.state = {
      devices: devices
    };
  }
  componentDidMount() {}
  addDevice(device) {
    console.log('deviceAdded');
    this.setState({
      devices: [...this.state.devices, device]
    });
  }
  render() {
    return (
      <div className="dashboard">
        <DevicePanel devices={this.state.devices} actions={this.addDevice} />
        <VizPanel />
      </div>
    );
  }
}

export default Dashboard;
