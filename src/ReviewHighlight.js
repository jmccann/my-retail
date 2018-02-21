import React, { Component } from 'react';

import './ReviewHighlight.css';

class ReviewHighlight extends Component {
  render() {
    const reviewDescription =
      this.props.type === 'Pro' ? "most helpful 4-5 star review" : "most helpful 1-2 star review";

    return (
      <div>
        <h3>{this.props.type}</h3>
        <div>{reviewDescription}</div>
        <hr />
        <div>
          <div>Rating: {this.props.review.overallRating}</div>
          <div className="review-highlight-title">{this.props.review.title}</div>
          <div className="review-highlight-comment">{this.props.review.review}</div>
        </div>
      </div>
    );
  }
}

export default ReviewHighlight;
