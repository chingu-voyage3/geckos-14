import React from 'react';
import WelcomeText from '../../../components/landing/WelcomeText';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<WelcomeText
    heading="Sync, Manage and Control your Devices"
    welcomeText="DashThings.io is dedicatd to DIYers in need of an easy way to build user-friendly Dashboards for their Web of Things Devices"
  />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
