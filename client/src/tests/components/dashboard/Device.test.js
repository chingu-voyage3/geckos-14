import React from 'react';
import Device from '../../../components/dashboard/Device';
import { shallow } from 'enzyme';
import * as d from '../../../tempData';
const device = d.devices[0];
const actions = {};
it('renders without crashing', () => {
  const wrapper = shallow(<Device key={device.name} device={device} actions={actions} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
