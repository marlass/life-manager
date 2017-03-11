import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

import TodoItem from './../components/todo-item.jsx';

describe('<TodoItem/>', function () {
  it('should have an li with todo', function () {
    const wrapper = shallow(<TodoItem>Hey</TodoItem>);
    expect(wrapper.find('li')).to.have.length(1);
  });

  it('should have an li with class todo-item', function () {
    const wrapper = shallow(<TodoItem>Hej</TodoItem>);
    expect(wrapper.find('li').props().className).to.include('todo-item');
  });

  it('should render a children', function () {
    const wrapper = shallow(<TodoItem><span>Hey</span></TodoItem>);
    expect(wrapper.contains(<span>Hey</span>)).to.equal(true);
  })
});
