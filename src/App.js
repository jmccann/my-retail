import React, { Component } from 'react';
import './App.css';
import ItemPage from './ItemPage.js';
import data from './item-data.json';

class App extends Component {
  render() {
    return (
      <div>
        <ItemPage item={data.CatalogEntryView[0]} />
      </div>
    );
  }
}

export default App;
