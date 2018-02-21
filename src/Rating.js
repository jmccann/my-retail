import React, { Component } from 'react';

import './Rating.css';
import redStar from './red-star.svg';
import greyStar from './grey-star.svg';

class Rating extends Component {
  render() {
    var stars = []
    for (var i = 0; i < 5; i++) {
      if (i < this.props.rating) {
        stars.push(<img className="red-star" key={i.toString()} src={redStar} alt="red star" style={{width: this.props.size, height: this.props.size}} />)
        continue
      }
      stars.push(<img className="grey-star" key={i.toString()} src={greyStar} alt="grey star" style={{width: this.props.size, height: this.props.size}} />)
    }

    return (
      <div className="rating">{stars} {this.props.description}</div>
    );
  }
}

export default Rating;
