/** DevicePanel Component :
The DevicePanel displays  a controlPanel and a DeviceList
ControPanel needs the params, actions and parent props
DeviceList just needs the list of devices
 */

import React from 'react';
import DeviceList from './DeviceList';
import ControlPanel from './ControlPanel';

const DevicePanel = props => {
  return (
    <div className="device-panel">
      <ControlPanel {...props} />
      <DeviceList {...props} />
    </div>
  );
};

export default DevicePanel;
