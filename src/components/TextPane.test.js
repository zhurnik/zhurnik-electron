import React from 'react';
import ReactDOM from 'react-dom';
import TextPane from './TextPane';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextPane />, div);
});
