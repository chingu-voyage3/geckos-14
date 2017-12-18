/** Device Component :
The Device componet show for now static Data:
Name, Type and URL.
TODO: Add Status
TODO: Add specific control like Sync, Del, Edit
TODO: Allow expand/hide
 */

import React from 'react';

const Device = device => {
  // console.log('Device Component');
  return (
    <div className="device">
      <div>
        {device.name + '    '}
        <span>
          <a href={device.url} target="_blank">
            Url
          </a>
        </span>
      </div>
      <div>{device.type}</div>
    </div>
  );
};

export default Device;
