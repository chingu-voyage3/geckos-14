import React from 'react';
import Dashboard from '../containers/Dashboard';
import * as d from '../tempData';
import { shallow } from 'enzyme';

test('Dashboard', () => {
  it('renders without crashing', async () => {
    const wrapper = await shallow(<Dashboard />);
    // expect(wrapper.state).toBeDefined();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
