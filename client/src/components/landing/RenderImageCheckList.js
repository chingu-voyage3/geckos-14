import React from 'react';
import CheckListItem from './CheckListItem';

const RenderImageCheckList = props =>{
  const texts = props.texts;
  let checkList = [];
  texts.forEach(text => {
    checkList.push(<CheckListItem text={text} />);
  });
  return (
    <div className="features-one">
      <div>
        <h2>{props.heading}</h2>
      </div>
      <div className="features-one-container">
        <div>
           <img src={props.image} alt={props.alt} />
        </div>
        <div>
          {checkList}
        </div>
      </div>
    </div>
  );
};

export default RenderImageCheckList;
