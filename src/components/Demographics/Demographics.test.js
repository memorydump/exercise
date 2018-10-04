import React from 'react';
import ReactDOM from 'react-dom';
import Demographics from './Demographics';

const people = [
  {
    "name": "Doreah",
    "title": "",
    "isMale": 0,
    "culture": "Lysene",
    "dateOfBirth": 278279,
    "popularity": 0.110367892976588,
    "isAlive": 0
  },
  {
    "name": "Dorea Sand",
    "title": "",
    "isMale": 0,
    "culture": "Dornishmen",
    "dateOfBirth": 291,
    "popularity": 0.103678929765886,
    "isAlive": 1
  }
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Demographics 
    entries={people}
    show={false}
    handleClose={() => {}}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});
