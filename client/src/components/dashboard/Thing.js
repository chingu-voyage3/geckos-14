import React, { Component } from 'react';
import ThingAction from './ThingAction';
import ThingProperty from './ThingProperty';

const renderProperties = properties => {
  return Object.keys(properties).map(property => {
    // console.log('Property :', properties[property]);
    return <ThingProperty key={property} {...properties[property]} />;
  });
};

const renderActions = actions => {
  return Object.keys(actions).map(action => {
    // console.log('Action :', actions[action]);
    return <ThingAction key={action} {...actions[action]} />;
  });
};

const Thing = props => {
  return (
    <div className="thing">
      {props.name + '  '}
      <span>
        <a href={props.url} target="_blank">
          Url
        </a>
      </span>
      <div>{renderProperties(props.properties)}</div>
      <div>{renderActions(props.actions)}</div>
    </div>
  );
};

export default Thing;
