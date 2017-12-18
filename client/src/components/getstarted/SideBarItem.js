import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SideBarItem = item => {
  return (
    <div className="sidebar-item">
      <Link to={'#' + item.id}>
        <h3>{item.text}</h3>
      </Link>
    </div>
  );
};

export default SideBarItem;
