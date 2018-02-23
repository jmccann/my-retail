import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

import './styles/Cart.css';
import Quantity from './Quantity.js';

class Cart extends Component {
  render() {
    return (
      <div>
        <Quantity />

        <div className="cart-table">
          <div className="cart-row">
            <div className="cart-cell">
              <Button className="pickup-in-store"
                      disabled={this.props.purchasingChannelCode === "1"}
                      bsStyle="black"
                      block>
                Pickup In Store
              </Button>
            </div>
            <div className="cart-cell">
              <Button className="add-to-cart"
                      disabled={this.props.purchasingChannelCode === "2"}
                      bsStyle="red"
                      block>
                Add To Cart
              </Button>
            </div>
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
