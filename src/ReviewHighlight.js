import React, { Component } from 'react';

class ReviewHighlight extends Component {
  render() {
    const reviewDescription =
      this.props.type === 'Pro' ? "most helpful 4-5 star review" : "most helpful 1-2 star review";

    return (
      <div>
        <h3>{this.props.type}</h3>
        <div>{reviewDescription}</div>
        <div>
          <div>Rating: {this.props.review.overallRating}</div>
          <div><b>{this.props.review.title}</b></div>
          <div>{this.props.review.review}</div>
        </div>
      </div>
    );
  }
}

export default ReviewHighlight;
