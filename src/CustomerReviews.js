import React, { Component } from 'react';

import './styles/CustomerReviews.css';
import Rating from './Rating.js';
import ReviewHighlight from './ReviewHighlight.js';

class CustomerReviews extends Component {
  render() {
    return (
      <div>

        <div className="overall-review-table">
          <div className="overall-review-table-row">
            <div className="overall-review-table-cell"><Rating rating={this.props.reviews.consolidatedOverallRating} description="overall" size="30px" /></div>
            <div className="overall-review-table-cell"></div>
            <div className="overall-review-table-cell"></div>
            <div className="overall-review-table-cell total-reviews">View all {this.props.reviews.totalReviews} reviews</div>
          </div>
        </div>

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
