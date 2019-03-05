import React, { Component } from 'react';
import '../scss/SingleBar.scss';
import SingleBar from './SingleBar'

/**
 * This class will generate progress bars based on a collection of information in the following format:
  [
    {
      title: 'Data1',
      left: { color: '#007cff', value: 48 },
      right: { color: '#ffe944', value: 240 },
    }
  ]
 */
class MultiBar extends Component {

  render() {
    return (
      <div className="multibar">
        {this.props.values.map((bar) => (
            <SingleBar left={{color: bar.left.color, value: bar.left.value }} right={{ color: bar.right.color, value: bar.right.value }} title={bar.title}/>
        ))}
      </div>
    );
  }
}

export default MultiBar;
