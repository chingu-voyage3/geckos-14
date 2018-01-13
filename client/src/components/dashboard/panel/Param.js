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
      <option key={'SD-' + option.id} value={option.value}>
        {option.display}
      </option>
    );
  });
};
// redering specific type for each Param.
// TODO: Transform to switch with different type if needed

const Param = props => {
  return (
    <div className="control-panel-param">
      <label htmlFor={'param-id-' + props.name}>{props.label}</label>
      {props.type === 'select' ? (
        <select className="" {...props}>
          {renderSelect(props.options)}
        </select>
      ) : (
        <input className="" {...props} />
      )}
    </div>
  );
};

export default Param;
