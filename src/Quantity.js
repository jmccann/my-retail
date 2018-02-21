import React, { Component } from 'react';

import Button from 'muicss/lib/react/button';

class Quantity extends Component {
  constructor(props) {
    super(props);
    this.state = {quantity: 1, disabled: true};

    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  decreaseQuantity(event) {
    this.setState({
      quantity: this.state.quantity >= 2 ? this.state.quantity-1 : this.state.quantity,
      disabled: this.state.quantity <= 2
    });
  }

  increaseQuantity(event) {
    this.setState({
      quantity: this.state.quantity+1,
      disabled: false
    });
  }

  render() {
    return (
      <div key={this.state.quantity}>
        <Button className="decrease" variant="fab" disabled={this.state.disabled} onClick={this.decreaseQuantity}>-</Button>
        <input className="quantity" type="text" defaultValue={this.state.quantity} />
        <Button className="increase" variant="fab" onClick={this.increaseQuantity}>+</Button>
      </div>
    );
  }
}

export default Quantity;