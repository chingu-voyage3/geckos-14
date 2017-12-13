import React from 'react';

const Device = device => {
  console.log('Device Component');
  return (
    <div className="device">
      <h4>
        {device.name} <span>{device.status}</span>
      </h4>
      <p>{device.type}</p>
    </div>
  );
};

export default Device;
