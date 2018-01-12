import React from 'react';

const Switch = props => {
  console.log(props);
  return Object.keys(props.values).map(value => {
    let status = props.values[value];
    let data = props.data[0];

    return (
      <div key={'status-' + status.name}>
        <label className="switch-name">{status.name}</label>
        <div>
          <span className="switch-info-false">False</span>
          <label className="switch">
            <input type="checkbox" checked={data.value} />
            <span className="switch-slider round" />
          </label>
          <span className="switch-info-true">True</span>
        </div>
        <span className="">{data.timestamp}</span>
      </div>
    );
  });
};

export default Switch;
