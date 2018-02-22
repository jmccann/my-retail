import React, { Component } from 'react';

import './ReturnPolicy.css';

class ReturnPolicy extends Component {
  render() {
    return (
      <div className="return-container">
        <div className="return-row">
          <div className="return-cell"><div className="return-title">returns</div></div>
          <div className="return-cell"><div className="vl"></div></div>
          <div className="return-cell"><div className="return-policy" dangerouslySetInnerHTML={{ __html: this.props.returnPolicy.legalCopy }} /></div>
        </div>
      </div>
    );
  }
}

export default ReturnPolicy;
