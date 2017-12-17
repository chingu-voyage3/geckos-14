import React from 'react';
import Viz from './Viz';

const renderViz = viz => {
  // console.log('renderViz', viz);
  return <Viz key={viz.name} {...viz} />;
};
const renderVizGrid = vizs => {
  // console.log('renderVizList');
  return vizs.map(viz => {
    return renderViz(viz);
  });
};
const VizGrid = props => {
  // console.log('VizGrid Component');
  return <div className="viz-grid">{renderVizGrid(props.vizs)}</div>;
};

export default VizGrid;
