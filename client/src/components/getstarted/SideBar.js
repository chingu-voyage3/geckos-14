/** SideBar Component :
SideBar display a list of Titles and provide inPage navigation.
For now data is static and saved in local file.
TODO:Make the SideBar Sticky when scrolling
 */
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
  return <div className="getstarted-sidebar">{renderItems(props.items)}</div>;
};

export default SideBar;
