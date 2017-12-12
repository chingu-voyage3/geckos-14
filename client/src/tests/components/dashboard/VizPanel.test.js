import React from 'react';
import VizPanel from '../../../components/dashboard/VizPanel';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrVizPaneler = shallow(<VizPanel />);
  expect(toJson(wrVizPaneler)).toMatchSnapshot();
});
