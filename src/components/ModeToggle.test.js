import React from 'react';
import ReactDOM from 'react-dom';
import ModeToggle from './ModeToggle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ModeToggle />, div);
});
