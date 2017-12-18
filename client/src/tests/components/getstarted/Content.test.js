import React from 'react';
import Content from '../../../components/getstarted/Content';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<Content />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
