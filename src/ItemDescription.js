import React, { Component } from 'react';

import './styles/ItemDescription.css';

class ItemDescription extends Component {
  render() {
    const listItems = this.props.features.map((feature, index) =>
      <li key={index} className='feature' dangerouslySetInnerHTML={{ __html: feature }} />
    );

    return (
      <div className="item-description-container">
        <div className="item-title">Product Highlights</div>
        <ul className="item-description-list">{listItems}</ul>
      </div>
    );
  }
}

export default ItemDescription;
