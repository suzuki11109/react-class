import React from 'react';
import { shallow } from 'enzyme';

import Counter from './Counter';

describe('Counter', () => {

  it('renders button -', () => {
    let wrapper = shallow(<Counter />);

    let button = <button>-</button>;

    expect(wrapper.containsMatchingElement(button)).toEqual(true);
  });

  it('renders button +', () => {
    let wrapper = shallow(<Counter />);

    let button = <button>+</button>;

    expect(wrapper.containsMatchingElement(button)).toEqual(true);
  });

  it('renders counting number', () => {
    let wrapper = shallow(<Counter />);

    let count = <span>{0}</span>;

    expect(wrapper.containsMatchingElement(count)).toEqual(true);
  });

  it('increase count 1 when click add button', () => {
    let wrapper = shallow(<Counter />);

    wrapper.find('button.add').simulate('click');

    expect(wrapper.find('span').text()).toEqual('1');
  });

  it('increase count 1 when click add button', () => {
    let wrapper = shallow(<Counter />);

    wrapper.find('button.minus').simulate('click');

    expect(wrapper.find('span').text()).toEqual('-1');
  });

});

