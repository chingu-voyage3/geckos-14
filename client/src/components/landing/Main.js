import React from 'react';
import '../../assets/Landing.css';
import { Link } from 'react-router-dom'; // Yet to figure React-routing

const Main = () => {
  return (
    <section className="main-section">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand">DashThings</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link">About Us<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Help </a>
            </li>
          </ul>
          <a> <span className="navbar-text"> Login </span> </a>
        </div>
      </nav>
      <div className="welcome-text">
        <h1 className="text-center">Sync, Manage and Control your Devices</h1>
        <h5 className="text-center mt-5">DashThings.io is dedicatd to DIYers in need of an easy way to build user-friendly Dashboards for their Web of Things Devices</h5>
        <div className="welcome-text-button"><button type="button" className="btn btn-outline-secondary btn-lg">Get Started</button></div>
      </div>
    </section>
  );
};

export default Main;
