import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../containers/Footer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(<Footer />);
  expect(toJson(wrapper)).toMatchSnapshot(); 
});
