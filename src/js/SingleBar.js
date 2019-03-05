import React, { Component } from 'react';
import '../scss/SingleBar.scss';

/**
 * Generate a simple progress bar display
 */
class SingleBar extends Component {
  /*
    props: {
      title: 'Data1',
      left: { color: '#007cff', value: 48 },
      right: { color: '#ffe944', value: 240 },
    }
  */
  constructor(props){
    super(props);
    this.state = {
      summaryIsShowing: ''
    };

    this.total = props.left.value + props.right.value;
    this.leftWidth = Math.round((props.left.value/this.total)*100) +'%';
    this.rightWidth = Math.round((props.right.value/this.total)*100)+'%';
  }

  //toggle summary display
  updateState(value){
    this.setState({summaryIsShowing: value});
  }

  render() {
    let leftStyle = {
      width: this.leftWidth,
      backgroundColor: this.props.left.color,
      border: this.state.summaryIsShowing==='left' ? "2px solid #000" : ""
    }

    let rightStyle = {
      width: this.rightWidth,
      backgroundColor: this.props.right.color,
      border: this.state.summaryIsShowing==='right' ? "2px solid #000" : ""
    }

    return (
      <div className="singlebar">
        <div className="singlebar-title">
          {this.props.title}
        </div>
        <div className="singlebar-total">
          Total: {this.total}
        </div>
        <div className="singlebar-bar">
          <div className="left" style={leftStyle} onMouseEnter={() => this.updateState('left')} onMouseLeave={() => this.updateState('')}>
            <span className="value">{this.leftWidth}</span>
          </div>
          <div className="right" style={rightStyle} onMouseEnter={() => this.updateState('right')} onMouseLeave={() => this.updateState('')}>
            <span className="value">{this.rightWidth}</span>
          </div>
        </div>
        { this.state.summaryIsShowing==='left' && 
            <div className="summary">
              <h4 className="title">{this.props.title}</h4>
              <div className="content">
                <div>Value: {this.props.left.value}</div>
                <div>{this.leftWidth} of total {this.total}</div>
              </div>
            </div>
        }
        { this.state.summaryIsShowing==='right' && 
            <div className="summary">
              <h4 className="title">{this.props.title}</h4>
              <div className="content">
                <div>Value: {this.props.right.value}</div>
                <div>{this.rightWidth} of total {this.total}</div>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default SingleBar;
