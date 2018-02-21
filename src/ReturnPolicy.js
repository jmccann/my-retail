import React, { Component } from 'react';

class ReturnPolicy extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.props.returnPolicy.legalCopy }} />
    );
  }
}

export default ReturnPolicy;
