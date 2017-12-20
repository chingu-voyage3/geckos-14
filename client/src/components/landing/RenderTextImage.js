import React from 'react';

const RenderTextImage = (props) => {
  return (
    <div className="features-two">
      <h2> {props.heading ? props.heading : true} </h2>
      <div className="features-two-container">
        <div>
          <h4> {props.text} </h4>
        </div>
        <div>
          <img src={props.image} alt={props.alt}/>
        </div>
      </div>
    </div>
  );
}

export default RenderTextImage;
