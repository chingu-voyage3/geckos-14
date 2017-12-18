import React from 'react';
import { Link } from 'react-router-dom';
const SideBarItem = item => {
  return (
    <div className="sidebar-item">
      <Link to={'#' + item.id}>{item.text}</Link>
    </div>
  );
};

export default SideBarItem;
