import React from 'react';
import SideBar from '../../../components/getstarted/SideBar';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<SideBar />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
