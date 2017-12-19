/** Device Component :
The Device componet show for now static Data:
Name, Type and URL.
TODO: Add Status
TODO: Add specific control like Sync, Del, Edit
TODO: Allow expand/hide
 */
import React from 'react';

const Device = props => {
  // console.log('Device Component');
  return (
    <div className="device" onClick={props.actions.toogleSelected(props.device.id)}>
      <div>
        {props.device.name + '    '}
        <span>
          <a href={props.device.url} target="_blank">
            Url
          </a>
        </span>
      </div>
      <div>{props.device.type}</div>
    </div>
  );
};

export default Device;
