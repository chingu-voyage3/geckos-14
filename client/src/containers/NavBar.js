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
            <a href="#" onClick={this.handleLogout}>
              LogOut
            </a>
          </li>
        </ul>
      );
    }

    return (
      <ul>
        <li>
          <a href="#" onClick={this.handleLogin}>
            LogIn
          </a>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    );
  }

  renderMenu() {
    return (
      <ul>
        <li>
          <Link to="/">DashThings</Link>
        </li>
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
    );
  }
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-bar-menu">{this.renderMenu()}</div>
        <div className="nav-bar-login">{this.renderLogin()}</div>
      </div>
    );
  }
}

export default NavBar;
