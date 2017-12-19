import React from 'react';
import CheckListItem from './components/CheckListItem';

const RenderImageCheckList = props =>{
  const texts = props.texts;
  let checkList = [];
  texts.forEach(text => {
    checkList.push(<CheckListItem text={text} />);
  });
  return (
    <section className="section-one section">
      <h2 className="text-center font-weight-bold">{props.heading}</h2>
      <div className="row features-one">
        <div className="col-md-6">
           <img src={props.image} className="img-fluid" alt={props.alt} />
        </div>
        <div className="col-md-6">
          {checkList}
        </div>
      </div>
   </section>
  );
};

export default RenderImageCheckList;
