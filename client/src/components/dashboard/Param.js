/** Param Component:
Param component is the smallest component of the controlPanel.
TODO: Allow the composistion of different type of input (select, checkbox, radio)
*/
import React from 'react';

// render Method for Select input
const renderSelect = options => {
  return options.map(option => {
    // TODO: Add in option objects value and display text
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });
};
// populating the Source Device Select using Device List from Dashbord
const populateDevices = props => {
  const options = props.options;
  if (props.name === 'device_id') {
    console.log('populating', props.name);
    props.devices.map(device => {
      if (!options.includes(device.name)) {
        options.push(device.name);
      }
    });
    console.log(options);
    return options;
  }
  return options;
};
// redering specific type for each Param.
// TODO: Transform to switch with different type if needed
const renderType = props => {
  const options = populateDevices(props);
  return props.type === 'select' ? (
    <select
      className="control-param-select"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      id={'param-id-' + props.name}
    >
      {renderSelect(options)}
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
