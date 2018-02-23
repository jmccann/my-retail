import { shallow } from 'enzyme';
import React from 'react';

import ReturnPolicy from './ReturnPolicy';
import data from './item-data.json';

it('renders without crashing', () => {
  shallow(<ReturnPolicy returnPolicy={data.CatalogEntryView[0].ReturnPolicy[0]} />);
});
