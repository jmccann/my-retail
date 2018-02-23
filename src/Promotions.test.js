import { shallow } from 'enzyme';
import React from 'react';

import Promotions from './Promotions';
import data from './item-data.json';

it('renders without crashing', () => {
  shallow(<Promotions promos={data.CatalogEntryView[0].Promotions} />);
});

it('generates a list of promotions', () => {
  const wrapper = shallow(<Promotions promos={data.CatalogEntryView[0].Promotions} />);
  expect(wrapper.find('div.promo-item').length).toBe(2);
});
