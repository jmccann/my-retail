import { shallow } from 'enzyme';
import React from 'react';

import Rating from './Rating';
import ReviewHighlight from './ReviewHighlight';
import data from './item-data.json';

it('renders without crashing', () => {
  shallow(<ReviewHighlight type='Pro' review={data.CatalogEntryView[0].CustomerReview[0].Pro[0]} />);
});

it('renders a pro review', () => {
  const wrapper = shallow(<ReviewHighlight review={data.CatalogEntryView[0].CustomerReview[0].Pro[0]} />);
  expect(wrapper.contains(<h3>Pro</h3>)).toBe(true);
  expect(wrapper.contains(<div>most helpful 4-5 star review</div>)).toBe(true);
});

it('renders a con review', () => {
  const wrapper = shallow(<ReviewHighlight review={data.CatalogEntryView[0].CustomerReview[0].Con[0]} />);
  expect(wrapper.contains(<h3>Con</h3>)).toBe(true);
  expect(wrapper.contains(<div>most helpful 1-2 star review</div>)).toBe(true);
});

it('renders <Rating /> component', () => {
  const wrapper = shallow(<ReviewHighlight review={data.CatalogEntryView[0].CustomerReview[0].Pro[0]} />);
  expect(wrapper.find(Rating).length).toBe(1);
  expect(wrapper.find(Rating).props().rating).toBe("5");
});

it('renders review title', () => {
  const wrapper = shallow(<ReviewHighlight review={data.CatalogEntryView[0].CustomerReview[0].Pro[0]} />);
  expect(wrapper.contains(<div className="review-highlight-title">Fantastic Blender</div>)).toBe(true);
});

it('renders review comment', () => {
  const wrapper = shallow(<ReviewHighlight review={data.CatalogEntryView[0].CustomerReview[0].Pro[0]} />);
  expect(wrapper.contains(<div>This blender works amazingly, and blends within seconds.  The single serve cups also work really well for smoothies or protein shakes!</div>)).toBe(true);
});

it('renders review details', () => {
  const wrapper = shallow(<ReviewHighlight review={data.CatalogEntryView[0].CustomerReview[0].Pro[0]} />);
  expect(wrapper.contains(<div>Eric - April 18, 2013</div>)).toBe(true);
});
