import React from 'react';
import Landing from '../containers/Landing';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<Landing />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
