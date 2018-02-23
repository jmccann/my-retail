import { shallow } from 'enzyme';
import React from 'react';
import ImageGallery from 'react-image-gallery';

import Images from './Images';
import data from './item-data.json';

it('renders without crashing', () => {
  shallow(<Images items={data.CatalogEntryView[0].Images} />);
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
