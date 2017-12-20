import React from 'react';
import { Link } from 'react-router-dom';

const GettingStartedButton = () => {
  return (
    <div className="welcome-text-button">
      <Link to="/getstarted"><button type="button" className="getstarted-button">Get Started</button></Link>
    </div>
  );
};

export default GettingStartedButton;
