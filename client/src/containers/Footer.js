import React, { Component } from 'react';
import SocialMedia from '../components/footer/SocialMedia';
import CatchyPhrase from '../components/footer/CatchyPhrase';
import SupportMail from '../components/footer/SupportMail';
import '../assets/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <SocialMedia />
        <CatchyPhrase />
        <SupportMail />
      </div>
    );
  }
}

export default Footer;
