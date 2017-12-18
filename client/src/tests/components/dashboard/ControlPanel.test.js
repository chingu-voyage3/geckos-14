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
  // eslint-disable-next-line no-console
  console.log('viz to be Added', viz);
};

it('renders without crashing', () => {
  const wrapper = shallow(<ControlPanel params={params} actions={addViz} parent="device" />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
