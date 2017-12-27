import React from 'react';
import ReactDOM from 'react-dom';
import CatchyPhrase from '../../../components/footer/CatchyPhrase';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<CatchyPhrase />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
