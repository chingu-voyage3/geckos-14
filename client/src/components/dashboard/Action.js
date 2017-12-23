/** Action Component:
Action describes all actions related to Devices or Vizs.
action.name is used for class creation
*/
import React from 'react';

const Action = props => {
  return (
    <button
      className="control-panel-action"
      name={props.name}
      onClick={props.onclick}
      id={'action-id-' + props.name}
    >
      {props.name}
    </button>
  );
};

export default Action;
