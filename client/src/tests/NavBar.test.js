import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../NavBar';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(<NavBar />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
