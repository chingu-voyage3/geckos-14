import React from 'react';
import DevicePanel from '../../../components/dashboard/DevicePanel';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrDevicePaneler = shallow(<DevicePanel />);
  expect(toJson(wrDevicePaneler)).toMatchSnapshot();
});
