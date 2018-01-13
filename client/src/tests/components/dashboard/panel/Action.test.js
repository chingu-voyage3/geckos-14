import React from 'react';
import Param from '../../../../components/dashboard/panel/Param';
import { shallow } from 'enzyme';

const onclick = e => {
  // eslint-disable-next-line no-console
  console.log(e.target.value);
};
const param = {
  name: 'test',
  onSelect: true
};
it('renders without crashing', () => {
  const wrapper = shallow(<Param {...param} onClick={onclick} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
