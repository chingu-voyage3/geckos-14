import React from 'react';
const RenderImageImage = (props) => {
  return (
    <div className="features-three">
      <h2> {props.heading ? props.heading : true} </h2>
      <div className="features-three-container">
        <div>
          <img src={props.imageOne} alt={props.alt} />
        </div>
        <div>
          <img src={props.imageTwo} alt={props.alt} />
        </div>
      </div>
    </div>
  );
};

export default RenderImageImage;
