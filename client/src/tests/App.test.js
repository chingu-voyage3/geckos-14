import React from 'react';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
