import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import Cart from './Cart';
import data from './item-data.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cart purchasingChannelCode="0" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has both purchase buttons enabled on purchasingChannelCode 0', () => {
  const wrapper = shallow(<Cart purchasingChannelCode="0" />);
  expect(wrapper.find('.pickup-in-store').props().disabled).toBe(false);
  expect(wrapper.find('.add-to-cart').props().disabled).toBe(false);
});

it('has both purchase buttons enabled on purchasingChannelCode 1', () => {
  const wrapper = shallow(<Cart purchasingChannelCode="1" />);
  expect(wrapper.find('.pickup-in-store').props().disabled).toBe(true);
  expect(wrapper.find('.add-to-cart').props().disabled).toBe(false);
});

it('has both purchase buttons enabled on purchasingChannelCode 2', () => {
  const wrapper = shallow(<Cart purchasingChannelCode="2" />);
  expect(wrapper.find('.pickup-in-store').props().disabled).toBe(false);
  expect(wrapper.find('.add-to-cart').props().disabled).toBe(true);
});
