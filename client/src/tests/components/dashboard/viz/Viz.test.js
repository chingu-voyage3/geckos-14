import React from 'react';
import Viz from '../../../../components/dashboard/viz/Viz';

import { shallow } from 'enzyme';

const lineData = [
  { date: '12/12', hum: 95 },
  { date: '13/12', hum: 93 },
  { date: '14/12', hum: 98 },
  { date: '15/12', hum: 85 }
];
const viz = {
  name: 'Temp Line',
  deviceName: 'LondonTemp',
  model: 'VictoryLine',
  x: 'date',
  y: 'temp',
  data: lineData
};
it('renders without crashing', () => {
  const wrapper = shallow(<Viz {...viz} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
