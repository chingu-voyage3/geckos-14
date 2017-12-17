import React from 'react';
import DevicePanel from '../../../components/dashboard/DevicePanel';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<DevicePanel />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
