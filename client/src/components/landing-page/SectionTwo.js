import React from 'react';
import '../../assets/Landing.css';
import devices from '../../assets/images/devices.png';

const SectionTwo = () => {
  return (
    <section className="section_two section">
      <div className="row featuresTwo">
        <div className="col-md-6">
          <h4 className="font-weight-bold"> Easily add or remove devices in your DashThings board </h4>
        </div>
        <div className="col-md-6">
          <img src={devices} className="img-fluid" alt="Internet of things devices" />
        </div>
      </div>
    </section>

   );
};

export default SectionTwo;
