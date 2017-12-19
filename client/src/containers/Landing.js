import React from 'react';
import '../assets/Landing.css';
import GettingStartedButton from '../components/landing/GettingStartedButton';
import WelcomeSection from '../components/landing/WelcomeSection';
import SectionOne from '../components/landing/SectionOne';
import SectionTwo from '../components/landing/SectionTwo';
import SectionThree from '../components/landing/SectionThree';


const Landing = () => {
  return (
      <div className="container">
        <WelcomeSection
          heading="Sync, Manage and Control your Devices"
          welcomeText="DashThings.io is dedicatd to DIYers in need of an easy way to build user-friendly Dashboards for their Web of Things Devices"/>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
  );
};

export default Landing;
