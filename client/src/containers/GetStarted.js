import React, { Component } from 'react';
import SideBar from '../components/getstarted/SideBar';
import Content from '../components/getstarted/Content';
import '../assets/GetStarted.css';
import * as d from '../tempData';

class GetStarted extends Component {
  render() {
    return (
      <div className="getstarted">
        <SideBar items={d.sideBarItems} />
        <Content content={d.getStartedContent} />
      </div>
    );
  }
}

export default GetStarted;
