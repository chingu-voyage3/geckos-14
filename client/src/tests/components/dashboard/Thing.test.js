import React from 'react';
import Thing from '../../../components/dashboard/Thing';
import { shallow } from 'enzyme';
import * as d from '../../../tempData';

it('renders without crashing', () => {
  const wrapper = shallow(<Thing {...d.things[0]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
