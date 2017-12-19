import React from 'react';
const CheckListItem = props => {
  return (
    <div>
      <i className="fas fa-check-square fa-3x"></i> <h5>{props.text}</h5>
    </div>
  );
};

export default CheckListItem;
