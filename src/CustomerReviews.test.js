import { shallow } from 'enzyme';
import React from 'react';

import CustomerReviews from './CustomerReviews';
import Rating from './Rating';
import ReviewHighlight from './ReviewHighlight';
import data from './item-data.json';

it('renders without crashing', () => {
  shallow(<CustomerReviews reviews={data.CatalogEntryView[0].CustomerReview[0]} />);
});

it('renders overall <Rating /> component', () => {
  const wrapper = shallow(<CustomerReviews reviews={data.CatalogEntryView[0].CustomerReview[0]} />);
  expect(wrapper.find(Rating).length).toBe(1);
  expect(wrapper.find(Rating).props().rating).toBe("4");
});

it('renders total reviews', () => {
  const wrapper = shallow(<CustomerReviews reviews={data.CatalogEntryView[0].CustomerReview[0]} />);
  expect(wrapper.contains(<div className="total-reviews">View all 14 reviews</div>)).toBe(true);
});

it('renders 2 <ReviewHighlight /> components', () => {
  const wrapper = shallow(<CustomerReviews reviews={data.CatalogEntryView[0].CustomerReview[0]} />);
  expect(wrapper.find(ReviewHighlight).length).toBe(2);
});
