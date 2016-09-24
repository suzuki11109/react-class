import {observable, computed} from 'mobx';

export default class ChatStore {
  @observable messages = ['Hello', 'Hello Aki'];

  @computed get messagesCount() {
    return 'Messages Count: ' + this.messages.length;
  }

  addMessage(text) {
    this.messages.push(text);
  }

}
