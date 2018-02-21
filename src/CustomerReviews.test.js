import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import CustomerReviews from './CustomerReviews';
import ReviewHighlight from './ReviewHighlight';
import data from './item-data.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomerReviews reviews={data.CatalogEntryView[0].CustomerReview[0]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders overall rating', () => {
  const wrapper = shallow(<CustomerReviews reviews={data.CatalogEntryView[0].CustomerReview[0]} />);
  expect(wrapper.contains(<div>Overall: 4</div>)).toBe(true);
});

it('renders total reviews', () => {
  const wrapper = shallow(<CustomerReviews reviews={data.CatalogEntryView[0].CustomerReview[0]} />);
  expect(wrapper.contains(<div>View all 14 reviews</div>)).toBe(true);
});

it('renders 2 <ReviewHighlight /> components', () => {
  const wrapper = shallow(<CustomerReviews reviews={data.CatalogEntryView[0].CustomerReview[0]} />);
  expect(wrapper.find(ReviewHighlight).length).toBe(2);
});
