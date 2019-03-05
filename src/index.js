import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import SingleBar from './js/SingleBar';
import MultiBar from './js/MultiBar';
import AsyncMultiBar from './js/AsyncMultiBar';

//values to construct a MultiBar component
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
  
//create single bar (task 1)
ReactDOM.render(<SingleBar left={{ color: '#007cff', value: 48 }} right={{ color: '#ffe944', value: 272 }} title="Tasks Completed"/>, document.getElementById('singlebar-root'));

//create Multi bar (task 2)
ReactDOM.render(<MultiBar values={values}/>, document.getElementById('multibar-root'));

//create Multi bar with data from API (task 3)
ReactDOM.render(<AsyncMultiBar />, document.getElementById('apiloader-root'));
