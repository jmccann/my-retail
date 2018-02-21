import React, { Component } from 'react';

class Offer extends Component {
  render() {
    return (
      <div>{this.props.offer.formattedPriceValue} {this.props.offer.priceQualifier}</div>
    );
  }
}

export default Offer;
