import React, {Component} from 'react';
import Main from './Main';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';


class Landing extends Component {
  render() {
    return (
      // Returns the four sections that makeup the landing page
      <div className="container">
        <Main />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    );
  }
}

export default Landing;
