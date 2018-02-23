import React, { Component } from 'react';

import './styles/Promotions.css';
import redTag from './images/red-tag.svg';

class Promotions extends Component {
  render() {
    const listItems = this.props.promos.map(promo =>
      <div key={promo.promotionIdentifier} className='promo-item'>
        <div className='promo-details'><img src={redTag} alt="red tag"/></div>
        <div className='promo-details'>{promo.Description[0].shortDescription}</div>
      </div>
    );

    return (
      <div>
        {listItems}
      </div>
    );
  }
}

export default Promotions;
