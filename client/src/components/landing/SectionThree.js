import React from 'react';
import '../../assets/Landing.css';
import dataOne from '../../assets/images/dataOne.jpg';
import dataTwo from '../../assets/images/dataTwo.jpg';

const SectionThree = () => {
  return (
    <section className="section-three section">
      <h3 className="text-center font-weight-bold mt-10"> Read easy to interpret, live data from all your devices </h3>
      <div className="row features-three">
        <div className="col-md-6">
          <img src={dataOne} className="img-fluid rounded" alt="Internet of things devices" height="500px" width="500px" />
        </div>
        <div className="col-md-6">
          <img src={dataTwo} className="img-fluid rounded" alt="Internet of things devices" height="470px" width="470px" />
        </div>
      </div>
    </section>
   );
};

export default SectionThree;
