import React from 'react';
import Param from '../../../../components/dashboard/panel/Param';
import { shallow } from 'enzyme';

const func = e => {
  // eslint-disable-next-line no-console
  console.log(e.target.value);
};
const param = {
  label: 'label',
  value: 'value',
  name: 'name',
  onChange: func
};
it('renders without crashing', () => {
  const wrapper = shallow(<Param {...param} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
