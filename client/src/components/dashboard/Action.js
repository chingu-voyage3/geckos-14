/** Param Component:
Param component is the smallest component of the controlPanel.
TODO: Allow the composistion of different type of input (select, checkbox, radio)
*/
import React from 'react';

const Action = props => {
  return (
    <button
      className={'action-' + props.name}
      name={props.name}
      onClick={props.onclick}
      id={'action-id-' + props.name}
    >
      {props.name}
    </button>
  );
};

export default Action;
