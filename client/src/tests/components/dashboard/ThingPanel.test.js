import React from 'react';
import ThingPanel from '../../../components/dashboard/ThingPanel';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<ThingPanel />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
