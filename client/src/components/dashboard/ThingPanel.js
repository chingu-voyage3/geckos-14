/** ThingPanel Component :
The ThingPanel displays  a controlPanel and a ThingList
ControPanel needs the params, actions and parent props
ThingList just needs the list of devices
 */

import React from 'react';
import ThingList from './thing/ThingList';
import ControlPanel from './panel/ControlPanel';

const ThingPanel = props => {
  return (
    <div className="thing-panel">
      <ControlPanel {...props} />
      <ThingList {...props} />
    </div>
  );
};

export default ThingPanel;
