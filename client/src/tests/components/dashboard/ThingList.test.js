import React from 'react';
import ThingList from '../../../components/dashboard/ThingList';
import * as d from '../../../tempData';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<ThingList things={d.things} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
