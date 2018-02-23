import { shallow } from 'enzyme';
import React from 'react';

import Cart from './Cart';
import Quantity from './Quantity';

it('renders without crashing', () => {
  shallow(<Cart purchasingChannelCode="0" />);
});

it('renders <Quantity /> component', () => {
  const wrapper = shallow(<Cart purchasingChannelCode="0" />);
  expect(wrapper.find(Quantity).length).toBe(1);
});

it('has both purchase buttons enabled on purchasingChannelCode 0', () => {
  const wrapper = shallow(<Cart purchasingChannelCode="0" />);
  expect(wrapper.find('.pickup-in-store').props().disabled).toBe(false);
  expect(wrapper.find('.add-to-cart').props().disabled).toBe(false);
});

it('has only "pickup in store" button enabled on purchasingChannelCode 1', () => {
  const wrapper = shallow(<Cart purchasingChannelCode="1" />);
  expect(wrapper.find('.pickup-in-store').props().disabled).toBe(true);
  expect(wrapper.find('.add-to-cart').props().disabled).toBe(false);
});

it('has only "add to cart" button enabled on purchasingChannelCode 2', () => {
  const wrapper = shallow(<Cart purchasingChannelCode="2" />);
  expect(wrapper.find('.pickup-in-store').props().disabled).toBe(false);
  expect(wrapper.find('.add-to-cart').props().disabled).toBe(true);
});
