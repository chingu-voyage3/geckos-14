import React from 'react';
import ReactDOM from 'react-dom';
import GetStarted from '../GetStarted';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GetStarted />, div);
});
