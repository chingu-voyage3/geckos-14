/** SideBarItem Component :
SideBarItem display a list of Titles and provide inPage navigation.
For now data is static and saved in local file.
TODO:Add css styling
 */

import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SideBarItem = item => {
  return (
    <div className="sidebar-item">
      <Link to={'#' + item.id}>
        <h3>{item.title}</h3>
      </Link>
    </div>
  );
};

export default SideBarItem;
