import React, { Component } from 'react';
import DeviceList from './DeviceList';

const devices = [
  { name: 'device1', status: 'online', type: 'Thermometer' },
  { name: 'device2', status: 'offline', type: 'PhMeter' },
  { name: 'device3', status: 'offline', type: 'Thermometer' }
];
class DevicePanel extends Component {
  render() {
    return (
      <div className="device-panel">
        <h3>Device Panel</h3>
        <DeviceList devices={devices} />
      </div>
    );
  }
}

export default DevicePanel;
