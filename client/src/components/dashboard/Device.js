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
    <div>
      <div>
        {props.name + '    '}
        <span>
          <a href={props.url} target="_blank">
            Url
          </a>
        </span>
      </div>
      <div>{props.type}</div>
    </div>
  );
};

export default Device;
