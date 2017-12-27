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
const actions = {};
const selected = {};
const addViz = viz => {
  // eslint-disable-next-line no-console
  console.log('viz to be Added', viz);
};

it('renders without crashing', () => {
  const wrapper = shallow(<ControlPanel params={params} actions={actions} selectedDevice={selected} parent="device" />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
