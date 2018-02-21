import React, { Component } from 'react';

import ReviewHighlight from './ReviewHighlight.js';

class CustomerReviews extends Component {
  render() {
    return (
      <div>
        <div>Overall: {this.props.reviews.consolidatedOverallRating}</div>
        <div>View all {this.props.reviews.totalReviews} reviews</div>
        <ReviewHighlight type='Pro' review={this.props.reviews.Pro[0]} />
        <ReviewHighlight type='Con' review={this.props.reviews.Con[0]} />
      </div>
    );
  }
}

export default CustomerReviews;
