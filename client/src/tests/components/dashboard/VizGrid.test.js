import React from 'react';
import VizGrid from '../../../components/dashboard/VizGrid';

import { shallow } from 'enzyme';
const lineData = [
  { date: '12/12', temp: 2 },
  { date: '13/12', temp: 0 },
  { date: '14/12', temp: 5 },
  { date: '15/12', temp: -3 }
];
const barData = [
  { date: '12/12', hum: 95 },
  { date: '13/12', hum: 93 },
  { date: '14/12', hum: 98 },
  { date: '15/12', hum: 85 }
];
const vizs = [
  {
    id: 'viz0',
    name: 'Temp Line',
    deviceName: 'LondonTemp',
    model: 'VictoryLine',
    x: 'date',
    y: 'temp',
    data: lineData
  },
  {
    id: 'viz1',
    name: 'Humidity Bar',
    deviceName: 'LondonHumidity',
    model: 'VictoryBar',
    x: 'date',
    y: 'hum',
    data: barData
  }
];
const update = jest.fn();
it('renders without crashing', () => {
  const wrapper = shallow(<VizGrid vizs={vizs} actions={{ update: update }} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
