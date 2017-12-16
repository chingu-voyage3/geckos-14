import React from 'react';
import { VictoryBar, VictoryLine, VictoryChart } from 'victory';
const Viz = props => {
  console.log(props.model);
  const Type = props.model;
  return (
    <VictoryChart domainPadding={20}>
      {React.createElement(Type === 'VictoryBar' ? VictoryBar : VictoryLine, { ...props }, null)}
    </VictoryChart>
  );
};

export default Viz;
