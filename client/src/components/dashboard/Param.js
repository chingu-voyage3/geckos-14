/** Param Component:
Param component is the smallest component of the controlPanel.
TODO: Allow the composistion of different type of input (select, checkbox, radio)
*/
import React from 'react';

const Param = props => {
  return (
    <label className="control-panel-param" htmlFor={'param-id-' + props.name}>
      {props.label}
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        id={'param-id-' + props.name}
      />
    </label>
  );
};

export default Param;
