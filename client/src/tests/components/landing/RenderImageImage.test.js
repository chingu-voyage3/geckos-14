import React from 'react';
import RenderImageImage from '../../../components/landing/RenderTextImage';
import dataOne from '../../../assets/images/dataOne.jpg';
import dataTwo from '../../../assets/images/dataTwo.jpg';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<RenderImageImage
    heading = "Read easy to interpret, live data from all your devices"
    imageOne = {dataOne}
    imageTwo = {dataTwo}
    alt = "Internet of things devices"
   />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
