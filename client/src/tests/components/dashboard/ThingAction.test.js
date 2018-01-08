import React from 'react';
import ThingAction from '../../../components/dashboard/ThingAction';
import { shallow } from 'enzyme';
// import * as d from '../../../tempData';

it('renders without crashing', () => {
  const wrapper = shallow(<ThingAction />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
