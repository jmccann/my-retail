import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import Promotions from './Promotions';
import data from './item-data.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Promotions promos={data.CatalogEntryView[0].Promotions} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('generates a list of promotions', () => {
  const wrapper = shallow(<Promotions promos={data.CatalogEntryView[0].Promotions} />);
  expect(wrapper.find('li.promo-item').length).toBe(2);
});
