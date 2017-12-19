import React from 'react';
import GetStarted from '../containers/GetStarted';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<GetStarted />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
