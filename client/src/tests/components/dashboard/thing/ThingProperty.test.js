import React from 'react';
import ThingProperty from '../../../../components/dashboard/thing/ThingProperty';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<ThingProperty />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
