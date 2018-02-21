import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import Rating from './Rating';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rating rating="4" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders 5 stars', () => {
   const wrapper = shallow(<Rating rating="4" />);
   expect(wrapper.find('img').length).toBe(5);
});

it('renders red stars', () => {
   const wrapper = shallow(<Rating rating="4" />);
   expect(wrapper.find('img.red-star').length).toBe(4);
});

it('renders grey stars', () => {
   const wrapper = shallow(<Rating rating="4" />);
   expect(wrapper.find('img.grey-star').length).toBe(1);
});
