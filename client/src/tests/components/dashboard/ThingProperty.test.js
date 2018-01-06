import React from 'react';
import ThingProperty from '../../../components/dashboard/ThingProperty';
import { shallow } from 'enzyme';
// import * as d from '../../../tempData';

it('renders without crashing', () => {
  const wrapper = shallow(<ThingProperty />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
