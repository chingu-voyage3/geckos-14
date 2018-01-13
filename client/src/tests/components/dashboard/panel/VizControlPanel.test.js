import React from 'react';
import VizControlPanel from '../../../../components/dashboard/panel/VizControlPanel';

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
  const wrapper = shallow(<VizControlPanel params={params} actions={actions} selected={selected} parent="viz" />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
