import React from 'react';

const ThingAction = props => {
  // console.log('ThingAction', props);
  return (
    <div className="thing-action">
      <div>{props.key}</div>
      <div className="thing-description">{props.description}</div>
    </div>
  );
};

export default ThingAction;
