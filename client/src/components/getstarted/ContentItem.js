/** ContentItem Component :
ContentItem display a list of Steps.
For now data is static and saved in local file.
TODO: Add css styling
TODO: Add Image and Video display
 */

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
