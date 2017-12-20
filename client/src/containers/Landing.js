import React from 'react';
import '../assets/Landing.css';
import devices from '../assets/images/devices.png';
import dataOne from '../assets/images/dataOne.jpg';
import dataTwo from '../assets/images/dataTwo.jpg';
import board from '../assets/images/board.png';
import WelcomeText from '../components/landing/WelcomeText';
import RenderImageCheckList from '../components/landing/RenderImageCheckList';
import RenderTextImage from '../components/landing/RenderTextImage';
import RenderImageImage from '../components/landing/RenderImageImage';


const Landing = () => {
  // Texts for CheckLists
  const checkListTexts = [
    'Discover all sensors/actuators connected to your device',
    'Add or remove readings from a specific sensor of a connected device',
    'Upload a file with sensor readings to display',
    'Discover all sensors/actuators connected to your Device'
  ];
  return (
      <div className="container">
        <WelcomeText
          heading="Sync, Manage and Control your Devices"
          welcomeText="DashThings.io is dedicatd to DIYers in need of an easy way to build user-friendly Dashboards for their Web of Things Devices"
        />
        <RenderImageCheckList
          heading="Features"
          image={board}
          alt = "A Web of things dashboard"
          texts = {checkListTexts}
         />
        <RenderTextImage
          text="Easily add or remove devices in your DashThings board"
          image = {devices}
          alt = "Internet of things devices"
        />
        <RenderImageImage
          heading = "Read easy to interpret, live data from all your devices"
          imageOne = {dataOne}
          imageTwo = {dataTwo}
          alt = "Internet of things devices"
         />
      </div>
  );
};

export default Landing;
