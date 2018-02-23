import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

import './styles/Quantity.css';

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
      <div className="quantity-container">
        <div className="quantity-box">
          <div className="quantity-text">quantity:</div>
          <div className="quantity-counter">
            <Button className="quantity-decrease"
                    bsSize="small"
                    disabled={this.state.disabled}
                    onClick={this.decreaseQuantity}>-</Button>
            <input key={this.state.quantity}
                   className="quantity-input"
                   type="text"
                   readOnly
                   defaultValue={this.state.quantity} />
            <Button className="quantity-increase"
                    bsSize="small"
                    onClick={this.increaseQuantity}>+</Button>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

export default Quantity;
