import React from 'react';
import ReactDOM from 'react-dom';
import Block from './Block';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Block 
    name="Test Name"
    title="Test Title"
    isMale={0}
    culture="Test Culture"
    dateOfBirth={123}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
