import React from 'react';
import Param from '../../../components/dashboard/Param';

import { shallow } from 'enzyme';
const func = e => {
  console.log(e.target.value);
};
const param = {
  label: 'label',
  value: 'value',
  name: 'name',
  onChange: func
};
it('renders without crashing', () => {
  const div = document.createElement('div');
  const wrParamer = shallow(<Param {...param} />);
  expect(toJson(wrParamer)).toMatchSnapshot();
});
