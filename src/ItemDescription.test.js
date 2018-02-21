import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import ItemDescription from './ItemDescription';
import data from './item-data.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemDescription features={data.CatalogEntryView[0].ItemDescription[0].features} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('generates a list of features', () => {
  const wrapper = shallow(<ItemDescription features={data.CatalogEntryView[0].ItemDescription[0].features} />);
  expect(wrapper.find('li.feature').length).toBe(10);
});
