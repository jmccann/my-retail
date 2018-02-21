import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import Cart from './Cart';
import CustomerReviews from './CustomerReviews';
import Images from './Images';
import ItemDescription from './ItemDescription';
import ItemPage from './ItemPage';
import Offer from './Offer';
import Promotions from './Promotions';
import ReturnPolicy from './ReturnPolicy';
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
  expect(wrapper.contains(<h2>Ninja™ Professional Blender with Single Serve Blending Cups</h2>)).toBe(true);
});

it('renders <Images /> component', () => {
  const wrapper = shallow(<ItemPage item={data.CatalogEntryView[0]} />);
  expect(wrapper.find(Images).length).toBe(1);
});

it('renders <CustomerReviews /> component', () => {
  const wrapper = shallow(<ItemPage item={data.CatalogEntryView[0]} />);
  expect(wrapper.find(CustomerReviews).length).toBe(1);
});

it('renders <Offer /> component', () => {
  const wrapper = shallow(<ItemPage item={data.CatalogEntryView[0]} />);
  expect(wrapper.find(Offer).length).toBe(1);
});

it('renders <Promotions /> component', () => {
  const wrapper = shallow(<ItemPage item={data.CatalogEntryView[0]} />);
  expect(wrapper.find(Promotions).length).toBe(1);
});

it('renders <Cart /> component', () => {
  const wrapper = shallow(<ItemPage item={data.CatalogEntryView[0]} />);
  expect(wrapper.find(Cart).length).toBe(1);
});

it('renders <ReturnPolicy /> component', () => {
  const wrapper = shallow(<ItemPage item={data.CatalogEntryView[0]} />);
  expect(wrapper.find(ReturnPolicy).length).toBe(1);
});

it('renders <ItemDescription /> component', () => {
  const wrapper = shallow(<ItemPage item={data.CatalogEntryView[0]} />);
  expect(wrapper.find(ItemDescription).length).toBe(1);
});
