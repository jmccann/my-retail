import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import CustomerReviews from './CustomerReviews';
import Images from './Images';
import ItemPage from './ItemPage';
import data from './item-data.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemPage item={data.CatalogEntryView[0]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders item title', () => {
  const wrapper = shallow((
    <ItemPage item={data.CatalogEntryView[0]} />
  ));
  expect(wrapper.contains(<h1>Ninja™ Professional Blender with Single Serve Blending Cups</h1>)).toBe(true);
});

it('renders <Images /> component', () => {
  const wrapper = shallow(<ItemPage item={data.CatalogEntryView[0]} />);
  expect(wrapper.find(Images).length).toBe(1);
});

it('renders <CustomerReviews /> component', () => {
  const wrapper = shallow(<ItemPage item={data.CatalogEntryView[0]} />);
  expect(wrapper.find(CustomerReviews).length).toBe(1);
});
