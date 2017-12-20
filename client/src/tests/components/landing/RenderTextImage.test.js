import React from 'react';
import RenderTextImage from '../../../components/landing/RenderTextImage';
import devices from '../../../assets/images/devices.png';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<RenderTextImage
    text="Easily add or remove devices in your DashThings board"
    image = {devices}
    alt = "Internet of things devices"
  />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
