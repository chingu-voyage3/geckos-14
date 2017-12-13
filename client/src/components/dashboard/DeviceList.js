import React from 'react';
import Device from './Device';

const renderDeviceList = devices => {
  // console.log('renderDeviceList');
  return devices.map(device => {
    return renderDevice(device);
  });
};
const renderDevice = device => {
  // console.log('renderDevice', device);
  return <Device key={device.name} {...device} />;
};
const DeviceList = props => {
  // console.log('DeviceList Component');
  return <div className="device-list">{renderDeviceList(props.devices)}</div>;
};

export default DeviceList;
