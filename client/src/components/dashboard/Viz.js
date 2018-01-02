/** Viz Component :
The Viz component can for now display 2 types of Chart :
Both Chart are imported from the Victory Lib

TODO: Allow the display of all kind of data (Static Data, Pulled Data, True/False status)
TODO: Transform Viz into resizeable elements
TODO: Make the VictoryChart Composistion more Dynamic.
 */

import React from 'react';
import { VictoryBar, VictoryLine, VictoryChart, VictoryTheme } from 'victory';

const Viz = props => {
  const Type = props.model;
  return (
    <VictoryChart
      domainPadding={20}
      theme={props.design === 'Material' ? VictoryTheme.material : VictoryTheme.grayscale}
    >
      {React.createElement(Type === 'VictoryBar' ? VictoryBar : VictoryLine, { ...props }, null)}
    </VictoryChart>
  );
};

export default Viz;
