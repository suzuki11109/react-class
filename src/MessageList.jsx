import React from 'react';
import Message from './Message';
import {observer} from 'mobx-react';

@observer
export default class MessageList extends React.Component {
  render() {
    let chatStore = this.props.chatStore;
    return <div>
      {
        chatStore.messages.map((message, i) => {
          return <Message key={i} text={message} />
        })
      }
      <p>
      {chatStore.messagesCount}</p>
    </div>;
  }
}
