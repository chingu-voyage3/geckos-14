import React from 'react';
import ControlPanel from '../../../components/dashboard/ControlPanel';

import { shallow } from 'enzyme';
const params = [
  {
    label: 'Name :',
    name: 'name'
  },
  {
    label: 'Type :',
    name: 'type'
  },
  {
    label: 'Url :',
    name: 'url'
  }
];
const addViz = viz => {
  console.log('viz to be Added', viz);
};
const actions = [];
it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrControlPaneler = shallow(<ControlPanel params={params} actions={addViz} parent="device" />);
  expect(toJson(wrControlPaneler)).toMatchSnapshot();
});
