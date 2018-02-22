import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import Offer from './Offer';
import data from './item-data.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Offer offer={data.CatalogEntryView[0].Offers[0].OfferPrice[0]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows the price', () => {
  const wrapper = shallow(<Offer offer={data.CatalogEntryView[0].Offers[0].OfferPrice[0]} />);
  expect(wrapper.contains(<div className="offer-price">$139.99</div>)).toBe(true);
});

it('shows the price qualifier', () => {
  const wrapper = shallow(<Offer offer={data.CatalogEntryView[0].Offers[0].OfferPrice[0]} />);
  expect(wrapper.contains(<div className="offer-qualifier">Online Price</div>)).toBe(true);
});
