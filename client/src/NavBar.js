import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>DashThing Logo</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/getstarted">Get Started</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
