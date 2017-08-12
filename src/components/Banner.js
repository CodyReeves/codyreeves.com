import React, { Component } from 'react'

const defaultProps = {
  contentPlacemnet: 'center',
  imageSize: 'full'
}

class Banner extends Component {
  render() {
    const { imageUrl, imageSize, contentPlacemnet, children } = this.props;

    return (
      <div className={`banner ${imageSize} banner-${contentPlacemnet}`} style={{ backgroundImage: 'url(' + imageUrl + ')' }} >
        {children}
      </div>
    )
  }
}

Banner.defaultProps = defaultProps;

export default Banner;
