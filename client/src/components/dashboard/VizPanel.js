/** VizPanel Component :
The VizPanel displays  a controlPanel and a VizGrid
ControPanel needs the params, actions and parent props
VizGrid just needs the list of vizs
 */

import React from 'react';
import VizGrid from './VizGrid';
import VizControlPanel from './VizControlPanel';

const VizPanel = props => {
  // console.log(props);
  return (
    <div className="viz-panel">
      <VizControlPanel {...props} />
      <VizGrid {...props} />
    </div>
  );
};

export default VizPanel;
