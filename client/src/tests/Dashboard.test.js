import React from 'react';
import Dashboard from '../containers/Dashboard';
import * as d from '../tempData';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
let mock = new MockAdapter(axios);

// Mock any GET request to /url
// arguments for reply are (status, data, headers)
mock.onGet('http://devices.webofthings.io/pi/sensors').reply(200, d.piSensors);
mock.onGet('http://devices.webofthings.io/pi/actuators').reply(200, d.piSensors);

it('renders without crashing', async () => {
  const wrapper = await shallow(<Dashboard />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
