/** Content Component :
Content display a list of Support/Tutotrial sections.
For now data is static and saved in local file.
 */
import React from 'react';
import ContentItem from './ContentItem';

const renderStep = step => {
  return <ContentItem key={step.id} {...step} />;
};

const renderSteps = steps => {
  return steps.map(step => {
    return renderStep(step);
  });
};
const Content = props => {
  return <div className="getstarted-content">{renderSteps(props.content)}</div>;
};

export default Content;
