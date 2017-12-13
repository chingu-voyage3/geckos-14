import React from 'react';
import ControlPanel from '../../../components/dashboard/ControlPanel';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrControlPaneler = shallow(<ControlPanel />);
  expect(toJson(wrControlPaneler)).toMatchSnapshot();
});
