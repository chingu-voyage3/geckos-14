import React from 'react';
import GettingStartedButton from '../../../components/landing/GettingStartedButton';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<GettingStartedButton />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
