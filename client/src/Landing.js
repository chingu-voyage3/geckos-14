import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';

class Landing extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to DashTings.io</h1>
          </header>
          <p className="App-intro">
            <strong>Let's Get Started Team Geckos-14!</strong>
          </p>
        </div>
    );
  }
}

export default Landing;
