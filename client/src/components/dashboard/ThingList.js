/** ThingList Component :
The ThingList displays  a list of Things using a simple CSS grid
TODO: Allow hiding the List
 */

import React from 'react';
import Thing from './Thing';

const renderThing = (thing, actions) => {
  // console.log('renderThing', thing);
  return (
    <Thing
      key={thing.id}
      onClick={() => {
        actions.toogleSelectedThing(thing.id);
      }}
      {...thing}
    />
  );
};
const renderThingList = props => {
  // console.log('renderThingList');
  return props.things.map(thing => {
    return renderThing(thing, props.actions);
  });
};
const ThingList = props => {
  // console.log('ThingList Component');
  if (props.things.length === 0) return <div className="loading">Loading Data...</div>;
  return <div className="thing-list">{renderThingList(props)}</div>;
};

export default ThingList;
