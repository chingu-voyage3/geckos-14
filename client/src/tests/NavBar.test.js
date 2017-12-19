import React from 'react';
import NavBar from '../NavBar';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<NavBar />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
