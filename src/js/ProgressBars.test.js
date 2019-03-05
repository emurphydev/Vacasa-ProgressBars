import React from 'react';
import ReactDOM from 'react-dom';
import SingleBar from './SingleBar';
import MultiBar from './MultiBar';
import AsyncMultiBar from './AsyncMultiBar';


const values = [
  {
    title: 'Data1',
    left: { color: '#007cff', value: 48 },
    right: { color: '#ffe944', value: 240 },
  },
  {
    title: 'Data2',
    left: { color: '#007cff', value: 36 },
    right: { color: '#ffe944', value: 85 },
  },
  {
    title: 'Data3',
    left: { color: '#007cff', value: 79 },
    right: { color: '#ffe944', value: 52 },
  },
]

//test if SingleBar renders
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleBar left={{ color: '#007cff', value: 48 }} right={{ color: '#ffe944', value: 272 }} title="Tasks Completed"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

//test if MultiBar renders
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MultiBar values={values} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//test if AsyncMultiBar renders
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AsyncMultiBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});