import React, { Component } from 'react';

class Promotions extends Component {
  render() {
    const listItems = this.props.promos.map(promo =>
      <li key={promo.promotionIdentifier} className='promo-item'>{promo.Description[0].shortDescription}</li>
    );

    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Promotions;
