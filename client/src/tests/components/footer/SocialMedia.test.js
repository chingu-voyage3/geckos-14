import React from 'react';
import ReactDOM from 'react-dom';
import SocialMedia from '../../../components/footer/SocialMedia';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<SocialMedia />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
