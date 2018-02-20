import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
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
