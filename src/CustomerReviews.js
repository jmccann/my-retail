import React, { Component } from 'react';

import ReviewHighlight from './ReviewHighlight.js';

import './CustomerReviews.css';

class CustomerReviews extends Component {
  render() {
    return (
      <div>
        <div>Overall: {this.props.reviews.consolidatedOverallRating}</div>
        <div>View all {this.props.reviews.totalReviews} reviews</div>
        <div className="review-table">
          <div className="review-table-row">
            <div className="review-table-cell">
              <ReviewHighlight type='Pro' review={this.props.reviews.Pro[0]} />
            </div>
            <div className="review-table-cell">
              <ReviewHighlight type='Con' review={this.props.reviews.Con[0]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerReviews;
