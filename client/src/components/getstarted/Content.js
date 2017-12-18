import React from 'react';
import ContentItem from './ContentItem';

const renderStep = step => {
  return <ContentItem {...step} />;
};

const renderSteps = steps => {
  return steps.map(step => {
    return renderStep(step);
  });
};
const Content = props => {
  return <div>{renderSteps(props.content)}</div>;
};

export default Content;
