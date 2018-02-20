import React, { Component } from 'react';
import Images from './Images.js';

class ItemPage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.item.title}</h1>
        <Images items={this.props.item.Images} />
      </div>
    );
  }
}

export default ItemPage;
