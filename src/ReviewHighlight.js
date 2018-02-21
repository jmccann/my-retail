import React, { Component } from 'react';

import './ReviewHighlight.css';
import redStar from './red-star.svg';
import greyStar from './grey-star.svg';

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

    var stars = []
    for (var i = 0; i < 5; i++) {
      if (i < this.props.review.overallRating) {
        stars.push(<img className="star" key={i.toString()} src={redStar} alt="red star" />)
        continue
      }
      stars.push(<img className="star" key={i.toString()} src={greyStar} alt="grey star" />)
    }

    return (
      <div>
        <h3>{this.props.type}</h3>
        <div>{reviewDescription}</div>
        <hr />
        <div>
          <div>{stars}</div>
          <div className="review-highlight-title">{this.props.review.title}</div>
          <div>{this.props.review.review}</div>
          <div>{this.props.review.screenName} - {date}</div>
        </div>
      </div>
    );
  }
}

export default ReviewHighlight;
