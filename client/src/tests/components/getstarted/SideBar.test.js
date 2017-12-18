import React from 'react';
import SideBar from '../../../components/getstarted/SideBar';
import * as d from '../../../tempData';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<SideBar items={d.sideBarItems} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
