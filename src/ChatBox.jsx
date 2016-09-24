import React from 'react';
import MessageList from './MessageList';
import MessageEntry from './MessageEntry';
import {observer} from 'mobx-react';
import ChatStore from './ChatStore';


let chatStore = new ChatStore();

@observer
export default class ChatBox extends React.Component {
  render() {
    return <div>
      <MessageList chatStore={chatStore} />
      <MessageEntry chatStore={chatStore} />
    </div>;
  }
}

