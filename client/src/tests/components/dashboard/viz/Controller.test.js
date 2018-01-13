import React from 'react';
import Controller from '../../../../components/dashboard/viz/Controller';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as d from '../../../../tempData';
// This sets the mock adapter on the default instance
let mock = new MockAdapter(axios);

// Mock any GET request to /url
// arguments for reply are (status, data, headers)
mock.onPost('http://gateway.webofthings.io/actions/ledState').reply(200);
it('renders without crashing', () => {
  const wrapper = shallow(<Controller {...d.controller} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
