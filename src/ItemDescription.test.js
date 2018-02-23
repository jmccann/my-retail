import { shallow } from 'enzyme';
import React from 'react';

import ItemDescription from './ItemDescription';
import data from './item-data.json';

it('renders without crashing', () => {
  shallow(<ItemDescription features={data.CatalogEntryView[0].ItemDescription[0].features} />);
});

it('generates a list of features', () => {
  const wrapper = shallow(<ItemDescription features={data.CatalogEntryView[0].ItemDescription[0].features} />);
  expect(wrapper.find('li.feature').length).toBe(10);
});
