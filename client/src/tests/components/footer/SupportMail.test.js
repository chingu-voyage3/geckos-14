import React from 'react';
import ReactDOM from 'react-dom';
import SupportMail from '../../../components/footer/SupportMail';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<SupportMail />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
