import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: Number(this.props.count)
    };
    this.styles = {
      color: 'red'
    }
  }

  increaseCount() {
    this.setState({
      count: this.state.count+1,
      styles: { color: 'green' }
    })
  }

  decreaseCount() {
    this.setState({
      count: this.state.count-1,
      styles: { color: 'red' }
    })
  }

  render() {
    return (
      <div className="counter">
        <b style={this.state.styles}>
          Count: {this.state.count}
        </b>
        <button onClick={() => this.increaseCount()}>+</button>
        <button onClick={() => this.decreaseCount()}>-</button>
      </div>
    );
  }
}

export default Counter;