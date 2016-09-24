import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer
export default class MessageEntry extends React.Component {
  @observable entry = '';

  onSendMessage = () => {
    this.props.chatStore.addMessage(this.entry);
    this.entry = '';
  }

  onChangeEntry = (e) => {
    this.entry = e.target.value;
  }

  render() {
    return <div>
      <input type="text" value={this.entry} onChange={this.onChangeEntry} />
      <button onClick={this.onSendMessage}>Send</button>
    </div>;
  }
}
