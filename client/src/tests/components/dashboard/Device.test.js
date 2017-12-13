import React from 'react';
import Device from '../../../components/dashboard/Device';

import { shallow } from 'enzyme';
const device = { name: 'device1', status: 'online', type: 'Thermometer' };
it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrDeviceer = shallow(<Device {...device} />);
  expect(toJson(wrDeviceer)).toMatchSnapshot();
});
