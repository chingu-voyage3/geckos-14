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
mock.onGet('http://gateway.webofthings.io').reply(200, d.piGateway.data, d.piGateway.headers);
mock.onGet('http://gateway.webofthings.io/model').reply(200, d.piModel.data, d.piModel.headers);

it('renders without crashing', async () => {
  const wrapper = await shallow(<Dashboard />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
