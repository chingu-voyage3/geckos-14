import React from 'react';

const Param = props => {
  return (
    <label>
      {props.label}
      <input
        className={'param-' + props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  );
};

export default Param;
