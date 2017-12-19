import React from 'react';
import Dashboard from '../containers/Dashboard';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<Dashboard />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
