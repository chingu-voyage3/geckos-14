/** VizGrid Component :
The VizGrid componet renders for now a basic CSS grid
TODO: Transform grid into draggable
 */
import React from 'react';
import Viz from './Viz';
import Controller from './Controller';
import Switch from './Switch';
// css files included in RGL package
import '../../assets/react-grid-layout.css';
import '../../assets/react-resizable.css';
import * as d from '../../tempData.js';

import ReactGridLayout from 'react-grid-layout';

const renderViz = (viz, actions) => {
  // console.log('renderViz', viz);

  if (viz.vizType === 'property') {
    switch (viz.model) {
      case 'display':
        return (
          <div
            key={viz.id}
            className="viz-property"
            onClick={() => {
              actions.toogleSelectedViz(viz.id);
            }}
          >
            display
          </div>
        );
      case 'switch':
        return (
          <div
            key={viz.id}
            className="viz-property"
            onClick={() => {
              actions.toogleSelectedViz(viz.id);
            }}
          >
            <Switch {...viz} />
          </div>
        );
      default:
        return (
          <div
            key={viz.id}
            className="viz-property"
            onClick={() => {
              actions.toogleSelectedViz(viz.id);
            }}
          >
            <Viz {...viz} />
          </div>
        );
    }
  } else {
    return (
      <div
        key={viz.id}
        className="viz-action"
        onClick={() => {
          actions.toogleSelectedViz(viz.id);
        }}
      >
        <Controller {...viz} update={actions.update} />
      </div>
    );
  }
};
const renderVizGrid = props => {
  // console.log('renderVizList');
  return props.vizs.map(viz => {
    return renderViz(viz, props.actions);
  });
};
const VizGrid = props => {
  // console.log('VizGrid Component');
  return (
    <div className="">
      <ReactGridLayout
        className="layout"
        layout={d.gridLayout}
        cols={3}
        rowHeight={200}
        width={900}
      >
        {renderVizGrid(props)}
      </ReactGridLayout>
    </div>
  );
};

export default VizGrid;
