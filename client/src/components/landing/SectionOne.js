import React from 'react';
import board from '../../assets/images/board.png';

const SectionOne = () => {
 return (
   <section className="section-one section">
     <h2 className="text-center font-weight-bold">Features</h2>
     <div className="row features-one">
       <div className="col-md-6">
          <img src={board} className="img-fluid" alt="A Web of things dashboard" />
       </div>
       <div className="col-md-6">
         <div><i className="fas fa-check-square fa-3x"></i> <h5>Discover all sensors/actuators connected to your device</h5></div>
         <div><i className="fas fa-check-square fa-3x"></i> <h5>Add or remove readings from a specific sensor of a connected device</h5></div>
         <div><i className="fas fa-check-square fa-3x"></i> <h5>Upload a file with sensor readings to display</h5></div>
         <div><i className="fas fa-check-square fa-3x"></i> <h5>Discover all sensors/actuators connected to your Device</h5></div>
       </div>
     </div>
  </section>
 );
};

export default SectionOne;
