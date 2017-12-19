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
      <ControlPanel
        params={props.params}
        actions={props.actions}
        selectedDevice={props.selected}
        parent="device"
      />
      <DeviceList devices={props.devices} actions={props.actions} />
    </div>
  );
};

export default DevicePanel;
