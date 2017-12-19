import React from 'react';

const RenderLandingSection = (props) => {
  return (
    <section className="section">
      <h2 className="text-center font-weight-bold mt-10"> {props.heading ? props.heading : true} </h2>
      <div className="row">
        <div className="col-md-6">
          <img src={props.} className="img-fluid rounded" alt="Internet of things devices" height="500px" width="500px" />
        </div>
        <div className="col-md-6">
          <img src={props.} className="img-fluid rounded" alt="Internet of things devices" height="470px" width="470px" />
        </div>
      </div>
    </section>
  );
}

export default RenderLandingSection;
