import React from 'react';
import VizPanel from '../../../components/dashboard/VizPanel';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<VizPanel />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
