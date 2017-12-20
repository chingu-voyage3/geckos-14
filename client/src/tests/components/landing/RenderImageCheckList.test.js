import React from 'react';
import RenderImageCheckList from '../../../components/landing/RenderImageCheckList';
import board from '../../../assets/images/board.png';

import { shallow } from 'enzyme';

const checkListTexts = [
  'Discover all sensors/actuators connected to your device',
  'Add or remove readings from a specific sensor of a connected device',
  'Upload a file with sensor readings to display',
  'Discover all sensors/actuators connected to your Device'
];

it('renders without crashing', () => {
  const wrapper = shallow(<RenderImageCheckList
    heading="Features"
    image={board}
    alt = "A Web of things dashboard"
    texts = {checkListTexts}
   />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
