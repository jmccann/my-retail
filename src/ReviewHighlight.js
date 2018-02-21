import React, { Component } from 'react';

import Rating from './Rating.js'
import './ReviewHighlight.css';

class ReviewHighlight extends Component {
  render() {
    const reviewDescription =
      this.props.type === 'Pro' ? "most helpful 4-5 star review" : "most helpful 1-2 star review";

    const dateFormat = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    })
    const date = dateFormat.format(new Date(this.props.review.datePosted));

    return (
      <div>
        <h3>{this.props.type}</h3>
        <div>{reviewDescription}</div>
        <hr />
        <div>
          <Rating rating={this.props.review.overallRating} />
          <div className="review-highlight-title">{this.props.review.title}</div>
          <div>{this.props.review.review}</div>
          <div>{this.props.review.screenName} - {date}</div>
        </div>
      </div>
    );
  }
}

export default ReviewHighlight;
