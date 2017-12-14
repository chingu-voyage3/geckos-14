import React, {Component} from 'react';
// import Main from '../Main';
import SectionOne from '../components/landing/SectionOne';
import SectionTwo from '../components/landing/SectionTwo';
import SectionThree from '../components/landing/SectionThree';


class Landing extends Component {
  render() {
    return (
      // Returns the four sections that makeup the landing page
      <div className="container">
        {/* <Main /> */}
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    );
  }
}

export default Landing;
