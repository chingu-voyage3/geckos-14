import React from 'react';
import DeviceList from '../../../components/dashboard/DeviceList';
import * as d from '../../../tempData';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<DeviceList devices={d.devices} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
