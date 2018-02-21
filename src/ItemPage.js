import React, { Component } from 'react';
import Button from 'muicss/lib/react/button';

import Cart from './Cart.js'
import CustomerReviews from './CustomerReviews.js';
import Images from './Images.js';
import Offer from './Offer.js';
import Promotions from './Promotions.js';
import ReturnPolicy from './ReturnPolicy.js';

class ItemPage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.item.title}</h1>
        <Images items={this.props.item.Images} />
        <CustomerReviews reviews={this.props.item.CustomerReview[0]} />
        <Offer offer={this.props.item.Offers[0].OfferPrice[0]} />
        <Promotions promos={this.props.item.Promotions} />
        <Cart purchasingChannelCode={this.props.item.purchasingChannelCode} />
        <ReturnPolicy returnPolicy={this.props.item.ReturnPolicy[0]} />
        <Button >Add To Registry</Button>
        <Button >Add To List</Button>
        <Button >Share</Button>
      </div>
    );
  }
}

export default ItemPage;
