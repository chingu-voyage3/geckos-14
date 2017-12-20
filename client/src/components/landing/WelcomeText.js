import React from 'react';
import GettingStartedButton from './GettingStartedButton';

const WelcomeText = (props) => {
  return (
    <section className="main-section">
      <div className="welcome-text">
        <h1 className="text-center">{props.heading}</h1>
        <h5 className="text-center mt-5">{props.welcomeText}</h5>
        <GettingStartedButton />
      </div>
    </section>
  );
};

export default WelcomeText;
