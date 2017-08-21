import React, { Component } from 'react'
import ProgressiveImage from 'react-progressive-bg-image';

const defaultProps = {
  contentPlacemnet: 'center',
  imageSize: 'full'
}

class Banner extends Component {
  render() {
    const { imageUrl, imageSize, contentPlacemnet, children } = this.props;

    return (
      <div className={`banner ${imageSize} banner-${contentPlacemnet}`}>
        <ProgressiveImage src={imageUrl} style={{ 'background-size': 'cover', 'background-position': 'top center' }}>
          {children}
        </ProgressiveImage>
      </div>
    )
  }
}

Banner.defaultProps = defaultProps;

export default Banner;
