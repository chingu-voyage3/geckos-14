/** DeviceList Component :
The DeviceList displays  a list of Devices using a simple CSS grid
TODO: Allow hiding the List
 */

import React from 'react';
import Device from './Device';

const renderDevice = (device, actions) => {
  // console.log('renderDevice', device);
  return (
    <div
      className="device"
      key={device.name}
      onClick={() => {
        actions.toogleSelectedDevice(device.id);
      }}
    >
      <Device {...device} />
    </div>
  );
};
const renderDeviceList = props => {
  // console.log('renderDeviceList');
  return props.devices.map(device => {
    return renderDevice(device, props.actions);
  });
};
const DeviceList = props => {
  // console.log('DeviceList Component');
  if (props.devices.length === 0) return <div className="loading">Loading Data...</div>;
  return <div className="device-list">{renderDeviceList(props)}</div>;
};

export default DeviceList;
