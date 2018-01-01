import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };
  }
  handleLogin = () => {
    if (!this.state.isLogged) {
      this.setState({ isLogged: true });
    }
  };
  handleLogout = () => {
    if (this.state.isLogged) {
      this.setState({ isLogged: false });
    }
  };
  renderLogin() {
    if (this.state.isLogged) {
      return (
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={this.handleLogout}>LogOut</button>
          </li>
        </ul>
      );
    }

    return (
      <ul>
        <li>
          <button onClick={this.handleLogin}>LogIn</button>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    );
  }
  render() {
    return (
      <div className="nav-bar">
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
        {this.renderLogin()}
      </div>
    );
  }
}

export default NavBar;
