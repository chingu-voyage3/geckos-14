import React from 'react';
import Device from './Device';

const renderDeviceList = devices => {
  console.log('renderDeviceList');
  return devices.forEach(device => {
    return <Device {...device} />;
  });
};
// const renderDevice = device => {
//   console.log('renderDevice');
// };
const DeviceList = props => {
  console.log('DeviceList Component');
  return <div className="device-list">{renderDeviceList(props.devices)}</div>;
};

export default DeviceList;
