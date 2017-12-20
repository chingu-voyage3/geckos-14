import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './assets/App.css';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to DashThings.io</h1>
        </header>
        <div className="App-intro">
            BUILD, CONNECT AND SHARE.
        </div>
      </div>
    );
  }
}

export default Landing;
