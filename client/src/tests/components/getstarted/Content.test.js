import React from 'react';
import Content from '../../../components/getstarted/Content';
import * as d from '../../../tempData';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<Content content={d.getStartedContent} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
