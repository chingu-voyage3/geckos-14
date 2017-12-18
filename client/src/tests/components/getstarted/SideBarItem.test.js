import React from 'react';
import SideBarItem from '../../../components/getstarted/SideBarItem';
import { shallow } from 'enzyme';

import * as d from '../../../tempData';
it('renders without crashing', () => {
  const wrapper = shallow(<SideBarItem item={d.sideBarItems[0]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
