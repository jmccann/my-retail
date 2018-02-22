import React, { Component } from 'react';
import Button from 'muicss/lib/react/button';

import Quantity from './Quantity.js';

import './Cart.css';

class Cart extends Component {
  render() {
    return (
      <div>
        <Quantity />

        <div className="cart-table">
          <div className="cart-row">
            <div className="cart-cell"><Button className="pickup-in-store" color="danger" disabled={this.props.purchasingChannelCode === "1"}>Pickup In Store</Button></div>
            <div className="cart-cell"><Button className="add-to-cart" color="danger" disabled={this.props.purchasingChannelCode === "2"}>Add To Cart</Button></div>
          </div>
          <div className="cart-row">
            <div className="cart-cell"><b>find in a store</b></div>
            <div className="cart-cell"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default Cart;
