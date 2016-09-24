import React from 'react';
import {observer} from 'mobx-react';

@observer
export default class Counter extends React.Component {
  onClickAdd = () => {
    this.props.counterStore.increase();
  }

  onClickMinus = () => {
    this.props.counterStore.decrease();
  }

  render() {
    return <div>
      <button className="minus" onClick={this.onClickMinus}>-</button>
      <span>{this.props.counterStore.count}</span>
      <button className="add" onClick={this.onClickAdd}>+</button>
    </div>;
  }
}
