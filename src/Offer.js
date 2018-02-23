import React, { Component } from 'react';

import './styles/Offer.css';

class Offer extends Component {
  render() {
    return (
      <div>
        <div className="offer-price">{this.props.offer.formattedPriceValue}</div>
        <div className="offer-qualifier">{this.props.offer.priceQualifier}</div>
      </div>
    );
  }
}

export default Offer;
