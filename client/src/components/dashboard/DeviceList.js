/** DeviceList Component :
The DeviceList displays  a list of Devices using a simple CSS grid
TODO: Allow hiding the List
 */

import React from 'react';
import Device from './Device';

const renderDevice = (device, actions) => {
  // console.log('renderDevice', device);
  return <Device key={device.name} device={device} actions={actions} />;
};
const renderDeviceList = props => {
  // console.log('renderDeviceList');
  return props.devices.map(device => {
    return renderDevice(device, props.actions);
  });
};
const DeviceList = props => {
  // console.log('DeviceList Component');
  return <div className="device-list">{renderDeviceList(props)}</div>;
};

export default DeviceList;
