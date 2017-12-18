import React from 'react';

const ContentItem = item => {
  return (
    <div className="getstarted-content-item" id={item.id}>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
    </div>
  );
};

export default ContentItem;
