/** Viz Component :
The Viz component can for now display 2 types of Chart :
Both Chart are imported from the Victory Lib

TODO: Allow the display of all kind of data (Static Data, Pulled Data, True/False status)
TODO: Transform Viz into resizeable elements
 */

import React from 'react';
import { VictoryBar, VictoryLine, VictoryChart } from 'victory';

// TODO: Make the VictoryChart Composistion more Dynamic.
const Viz = props => {
  // console.log(props.model);
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
