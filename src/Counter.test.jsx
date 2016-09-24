import React from 'react';
import { shallow } from 'enzyme';

import Counter from './Counter';
import CounterStore from './CounterStore';

describe('Counter', () => {
  let wrapper;

  beforeEach(() => {
    let counterStore = new CounterStore();
    wrapper = shallow(<Counter counterStore={counterStore} />);
  });

  it('renders button -', () => {
    let button = <button>-</button>;

    expect(wrapper.containsMatchingElement(button)).toEqual(true);
  });

  it('renders button +', () => {
    let button = <button>+</button>;

    expect(wrapper.containsMatchingElement(button)).toEqual(true);
  });

  it('renders counting number', () => {
    let count = <span>{0}</span>;

    expect(wrapper.containsMatchingElement(count)).toEqual(true);
  });

  it('increase count 1 when click add button', () => {
    wrapper.find('button.add').simulate('click');

    expect(wrapper.find('span').text()).toEqual('1');
  });

  it('decrease count 1 when click minus button', () => {
    wrapper.find('button.minus').simulate('click');

    expect(wrapper.find('span').text()).toEqual('-1');
  });

});

