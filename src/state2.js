import { observable, autorun } from 'mobx';

let state2 = observable({
  age: 0
});

state2.age = 1;

export default state2;

// autorun(() => {
//   console.log(state2.age);
// });

