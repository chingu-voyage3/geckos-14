import React from 'react';
import Switch from '../../../../components/dashboard/viz/Switch';
import { shallow } from 'enzyme';
import * as d from '../../../../tempData';

it('renders without crashing', () => {
  const wrapper = shallow(<Switch {...d.switchData.values} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
