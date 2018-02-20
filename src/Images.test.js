import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';

import Images from './Images';
import data from './item-data.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Images items={data.CatalogEntryView[0].Images} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders <ImageGallery /> component', () => {
  const wrapper = shallow(<Images items={data.CatalogEntryView[0].Images} />);
  expect(wrapper.find(ImageGallery).length).toBe(1);
});

it('provides ImageGallery with images', () => {
  const wrapper = shallow(<Images items={data.CatalogEntryView[0].Images} />);
  expect(wrapper.find(ImageGallery).props().items.length).toBe(8);
});

it('declares PrimaryImage first', () => {
  const wrapper = shallow(<Images items={data.CatalogEntryView[0].Images} />);
  expect(wrapper.find(ImageGallery).props().items[0].original).toBe("http:\/\/target.scene7.com\/is\/image\/Target\/14263758");
});
