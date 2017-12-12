import React, { Component } from 'react';
import DevicePanel from '../components/dashboard/DevicePanel';
import VizPanel from '../components/dashboard/VizPanel';
class Dashboard extends Component {
  render() {
    return (
      <div>
        <DevicePanel />
        <VizPanel />
      </div>
    );
  }
}

export default Dashboard;
