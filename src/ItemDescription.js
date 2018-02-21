import React, { Component } from 'react';

class ItemDescription extends Component {
  render() {
    const listItems = this.props.features.map((feature, index) =>
      <li key={index} className='feature' dangerouslySetInnerHTML={{ __html: feature }} />
    );

    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default ItemDescription;
