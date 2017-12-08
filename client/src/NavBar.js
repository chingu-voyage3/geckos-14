import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class NavBar extends Component {
  render() {
    return (
      <div>
      <ul>
        <li>DashThing Logo</li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/getstarted">Get Started</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      </ul>
    </div>
    );
  }
}

export default NavBar;
