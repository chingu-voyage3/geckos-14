/** Param Component:
Param component is the smallest component of the controlPanel.
TODO: Allow the composistion of different type of input (select, checkbox, radio)
*/
import React from 'react';

const renderSelect = options => {
  return options.map(option => {
    return <option value={option}>{option}</option>;
  });
};
const renderType = props => {
  return props.type === 'select' ? (
    <select
      className="control-param-select"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      id={'param-id-' + props.name}
    >
      {renderSelect(props.options)}
    </select>
  ) : (
    <input
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      id={'param-id-' + props.name}
    />
  );
};
const Param = props => {
  return (
    <label className="control-panel-param" htmlFor={'param-id-' + props.name}>
      {props.label}
      {renderType(props)}
    </label>
  );
};

export default Param;
