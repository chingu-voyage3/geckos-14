import React from 'react';
import '../assets/Landing.css';
import devices from '../../assets/images/devices.png';
import WelcomeText from '../components/landing/WelcomeSection';
import SectionOne from '../components/landing/SectionOne';
import RenderTextImage from './components/landing/RenderTextImage';
import SectionThree from '../components/landing/SectionThree';


const Landing = () => {
  return (
      <div className="container">
        <WelcomeText
          heading="Sync, Manage and Control your Devices"
          welcomeText="DashThings.io is dedicatd to DIYers in need of an easy way to build user-friendly Dashboards for their Web of Things Devices"/>
        <SectionOne />
        <RenderTextImage
          text="Easily add or remove devices in your DashThings board"
          image = {devices}
          alt = "Internet of things devices"
        />
        <SectionThree />
      </div>
  );
};

export default Landing;
