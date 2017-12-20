import React from 'react';
import CheckListItem from '../../../components/landing/CheckListItem';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<CheckListItem item='Discover all sensors/actuators connected to your device' />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
