import React from 'react';
import ContentItem from '../../../components/getstarted/ContentItem';
import { shallow } from 'enzyme';
import * as d from '../../../tempData';

it('renders without crashing', () => {
  const wrapper = shallow(<ContentItem item={d.getStartedContent[0]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
