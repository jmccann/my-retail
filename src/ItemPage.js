import React, { Component } from 'react';

import CustomerReviews from './CustomerReviews.js';
import Images from './Images.js';
import Offer from './Offer.js';

class ItemPage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.item.title}</h1>
        <Images items={this.props.item.Images} />
        <CustomerReviews reviews={this.props.item.CustomerReview[0]} />
        <Offer offer={this.props.item.Offers[0].OfferPrice[0]} />
      </div>
    );
  }
}

export default ItemPage;
