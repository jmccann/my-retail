import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";
import './styles/Images.css';

class Images extends Component {
  render() {
    var extractImages = function(images) {
      return images.map(i =>
        ({original: i.image, thumbnail: i.image})
      )
    }

    var getImages = function(items) {
      var i = []
      items.forEach(function (item) {
        i = i.concat(extractImages(item.PrimaryImage));
        i = i.concat(extractImages(item.AlternateImages));
      });
      return i
    }

    const imageList = getImages(this.props.items);

    return (
      <ImageGallery items={imageList} showPlayButton={false} showFullscreenButton={false} />
    );
  }

}

export default Images;
