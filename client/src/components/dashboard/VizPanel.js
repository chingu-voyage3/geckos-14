/** VizPanel Component :
The VizPanel displays  a controlPanel and a VizGrid
ControPanel needs the params, actions and parent props
VizGrid just needs the list of vizs
 */

import React from 'react';
import VizGrid from './VizGrid';
import ControlPanel from './ControlPanel';

const VizPanel = props => {
  // console.log(props);
  return (
    <div className="viz-panel">
      <ControlPanel actions={props.actions} params={props.params} parent="viz" />
      <VizGrid vizs={props.vizs} />
    </div>
  );
};

export default VizPanel;
