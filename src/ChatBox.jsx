import React from 'react';
import MessageList from './MessageList';
import MessageEntry from './MessageEntry';

export default class ChatBox extends React.Component {
  render() {
    return <div>
      <MessageList />
      <MessageEntry />
    </div>;
  }
}
