import React from 'react';
import DeviceList from './DeviceList';
import ControlPanel from './ControlPanel';

const DevicePanel = props => {
  // console.log(props);
  return (
    <div className="device-panel">
      <ControlPanel params={props.params} actions={props.actions} parent="device" />
      <DeviceList devices={props.devices} />
    </div>
  );
};

export default DevicePanel;
