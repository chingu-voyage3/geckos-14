import React from 'react';
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <section className="main-section">
      <div className="welcome-text">
        <h1 className="text-center">Sync, Manage and Control your Devices</h1>
        <h5 className="text-center mt-5">DashThings.io is dedicatd to DIYers in need of an easy way to build user-friendly Dashboards for their Web of Things Devices</h5>
        <div className="welcome-text-button"><Link to="/getstarted"><button type="button" className="btn btn-outline-secondary btn-lg">Get Started</button></Link></div>
      </div>
    </section>
  );
};

export default Main;
