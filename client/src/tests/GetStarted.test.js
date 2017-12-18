import React from 'react';
import GetStarted from '../GetStarted';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<GetStarted />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

