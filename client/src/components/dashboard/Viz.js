import React from 'react';
import { VictoryBar, VictoryLine, VictoryChart } from 'victory';

const Viz = props => {
  console.log(props.model);
  const Type = props.model;
  return (
    <div className="viz">
      <VictoryChart domainPadding={20}>
        {React.createElement(Type === 'VictoryBar' ? VictoryBar : VictoryLine, { ...props }, null)}
      </VictoryChart>
    </div>
  );
};

export default Viz;
