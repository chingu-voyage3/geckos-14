import React from 'react';

const Param = props => {
  return (
    <label htmlFor={'param-id-' + props.name}>
      {props.label}
      <input
        className={'param-' + props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        id={'param-id-' + props.name}
      />
    </label>
  );
};

export default Param;
