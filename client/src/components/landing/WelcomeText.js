import React from 'react';
import GettingStartedButton from './GettingStartedButton';

const WelcomeText = (props) => {
  return (
    <div className="main-section">
      <div className="welcome-text">
        <h1>{props.heading}</h1>
        <h5>{props.welcomeText}</h5>
        <GettingStartedButton />
      </div>
    </div>
  );
};

export default WelcomeText;
