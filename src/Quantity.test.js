import { shallow, mount } from 'enzyme';
import React from 'react';

import Quantity from './Quantity';

it('renders without crashing', () => {
  shallow(<Quantity />);
});

test('increase quantity', () => {
  const wrapper = mount(<Quantity />);
  expect(wrapper.find('input').props().defaultValue).toBe(1);
  wrapper.find('Button.increase').simulate('click');
  expect(wrapper.find('input').props().defaultValue).toBe(2);
  wrapper.find('Button.increase').simulate('click');
  expect(wrapper.find('input').props().defaultValue).toBe(3);
});

test('decrease quantity', () => {
  const wrapper = mount(<Quantity />);
  wrapper.find('Button.increase').simulate('click');
  expect(wrapper.find('input').props().defaultValue).toBe(2);
  wrapper.find('Button.decrease').simulate('click');
  expect(wrapper.find('input').props().defaultValue).toBe(1);
});

test('quantity can not be less then 1', () => {
  const wrapper = mount(<Quantity />);
  expect(wrapper.find('input').props().defaultValue).toBe(1);
  wrapper.find('Button.decrease').simulate('click');
  expect(wrapper.find('input').props().defaultValue).toBe(1);
});

it('disables decrease button by default', () => {
  const wrapper = mount(<Quantity />);
  expect(wrapper.find('Button.decrease').props().disabled).toBe(true);
});

it('enables decrease button when greater then 1', () => {
  const wrapper = mount(<Quantity />);
  wrapper.find('Button.increase').simulate('click');
  expect(wrapper.find('input').props().defaultValue).toBe(2);
  expect(wrapper.find('Button.decrease').props().disabled).toBe(false);
});

it('disables decrease button when quantity reaches 1', () => {
  const wrapper = mount(<Quantity />);
  wrapper.find('Button.increase').simulate('click');
  expect(wrapper.find('input').props().defaultValue).toBe(2);
  expect(wrapper.find('Button.decrease').props().disabled).toBe(false);
  wrapper.find('Button.decrease').simulate('click');
  expect(wrapper.find('Button.decrease').props().disabled).toBe(true);
});
