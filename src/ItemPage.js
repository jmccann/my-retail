import React, { Component } from 'react';
import Button from 'muicss/lib/react/button';

import Cart from './Cart.js'
import CustomerReviews from './CustomerReviews.js';
import Images from './Images.js';
import ItemDescription from './ItemDescription.js';
import Offer from './Offer.js';
import Promotions from './Promotions.js';
import ReturnPolicy from './ReturnPolicy.js';

import './ItemPage.css';

class ItemPage extends Component {
  render() {
    return (
      <div>

        <div className="page-table">
          <div className="page-table-row">

            <div className="page-table-cell">
              <h2>{this.props.item.title}</h2>
              <Images items={this.props.item.Images} />
              <CustomerReviews reviews={this.props.item.CustomerReview[0]} />
            </div>

            <div className="page-table-cell">
              <Offer offer={this.props.item.Offers[0].OfferPrice[0]} />
              <hr />
              <Promotions promos={this.props.item.Promotions} />
              <hr />
              <Cart purchasingChannelCode={this.props.item.purchasingChannelCode} />
              <ReturnPolicy returnPolicy={this.props.item.ReturnPolicy[0]} />
              <button className="grey-button">Add To Registry</button>
              <button className="grey-button">Add To List</button>
              <button className="grey-button">Share</button>
              <ItemDescription features={this.props.item.ItemDescription[0].features} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ItemPage;
