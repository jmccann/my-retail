import React, { Component } from 'react';

import './styles/ItemPage.css';
import Cart from './Cart.js'
import CustomerReviews from './CustomerReviews.js';
import Images from './Images.js';
import ItemDescription from './ItemDescription.js';
import Offer from './Offer.js';
import Promotions from './Promotions.js';
import ReturnPolicy from './ReturnPolicy.js';

class ItemPage extends Component {
  render() {
    return (
      <div>

        <div className="container">
          <div className="carousel">
            <h2>{this.props.item.title}</h2>
            <Images items={this.props.item.Images} />
          </div>
          <div><Offer offer={this.props.item.Offers[0].OfferPrice[0]} /></div>
          <div>
            <hr />
            <Promotions promos={this.props.item.Promotions} />
            <hr />
          </div>
          <div><Cart purchasingChannelCode={this.props.item.purchasingChannelCode} /></div>
          <div><ReturnPolicy returnPolicy={this.props.item.ReturnPolicy[0]} /></div>
          <div>
            <button className="grey-button">Add To Registry</button>
            <button className="grey-button">Add To List</button>
            <button className="grey-button">Share</button>
          </div>
          <div><ItemDescription features={this.props.item.ItemDescription[0].features} /></div>
          <div><CustomerReviews reviews={this.props.item.CustomerReview[0]} /></div>
        </div>

      </div>
    );
  }
}

export default ItemPage;
