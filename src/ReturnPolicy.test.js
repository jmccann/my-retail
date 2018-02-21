import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';

import ReturnPolicy from './ReturnPolicy';
import data from './item-data.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReturnPolicy returnPolicy={data.CatalogEntryView[0].ReturnPolicy[0]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
