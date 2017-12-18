/** GetStarted Container :
GetStarted contains allows a User or a Visitor to learn how to use Dashthings.
It is composed of a SideBar and Content items
 */

import React, { Component } from 'react';
import SideBar from '../components/getstarted/SideBar';
import Content from '../components/getstarted/Content';
import '../assets/GetStarted.css';
import * as d from '../tempData';

class GetStarted extends Component {
  render() {
    return (
      <div className="getstarted">
        <SideBar items={d.getStartedContent} />
        <Content content={d.getStartedContent} />
      </div>
    );
  }
}

export default GetStarted;
