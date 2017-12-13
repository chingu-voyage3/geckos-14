import React from 'react';

const Device = device => {
  console.log('Device Component');
  return (
    <div className="device">
      <h3>{device.name}</h3>
      <h4>{device.type}</h4>
      <h4>{device.status}</h4>
    </div>
  );
};

export default Device;
