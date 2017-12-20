import React from 'react';

const RenderTextImage = (props) => {
  return (
    <section className="section">
      <h2 className="text-center font-weight-bold mt-10"> {props.heading ? props.heading : true} </h2>
      <div className="row">
        <div className="col-md-6">
          <h4 className="font-weight-bold"> {props.text} </h4>
        </div>
        <div className="col-md-6">
          <img src={props.image} className="img-fluid rounded" alt={props.alt} height="470px" width="470px" />
        </div>
      </div>
    </section>
  );
}

export default RenderTextImage;
