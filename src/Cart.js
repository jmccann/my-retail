import React, { Component } from 'react';
import Button from 'muicss/lib/react/button';

import Quantity from './Quantity.js';

class Cart extends Component {
  render() {
    return (
      <div>
        <Quantity />
        <Button className="pickup-in-store" color="danger" disabled={this.props.purchasingChannelCode == 1}>Pickup In Store</Button>
        <Button className="add-to-cart" color="danger" disabled={this.props.purchasingChannelCode == 2}>Add To Cart</Button><br />
        find in a store
      </div>
    );
  }
}

export default Cart;
