import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {count: 0};
  }

  onClickAdd = () => {
    this.setState({count: this.state.count + 1});
  }

  onClickMinus = () => {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return <div>
      <button className="minus" onClick={this.onClickMinus}>-</button>
      <span>{this.state.count}</span>
      <button className="add" onClick={this.onClickAdd}>+</button>
    </div>;
  }
}
