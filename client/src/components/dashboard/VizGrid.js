/** VizGrid Component :
The VizGrid componet renders for now a basic CSS grid
TODO: Transform grid into draggable
 */
import React from 'react';
import Viz from './Viz';
// css files included in RGL package
import '../../assets/react-grid-layout.css';
import '../../assets/react-resizable.css';
import * as d from '../../tempData.js';

import ReactGridLayout from 'react-grid-layout';

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
  return (
    <div className="">
      <ReactGridLayout className="layout" layout={d.gridLayout} autoSize={true} width={900}>
        {renderVizGrid(props.vizs)}
      </ReactGridLayout>
    </div>
  );
};

export default VizGrid;
