import React from 'react';
import SideBarItem from './SideBarItem';

const renderItem = item => {
  return <SideBarItem key={item.id} {...item} />;
};

const renderItems = items => {
  return items.map(item => {
    return renderItem(item);
  });
};

const SideBar = props => {
  return <div>{renderItems(props.items)}</div>;
};

export default SideBar;
