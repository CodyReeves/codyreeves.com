import React from 'react'

const Banner = ({ imageUrl, imageSize, contentPlacemnet, children }) => (
  <div className={`banner ${imageSize} banner-${contentPlacemnet}`} style={{ backgroundImage: 'url(' + imageUrl + ')' }} >
    {children}
  </div>
)

Banner.defaultProps = {
  contentPlacemnet: 'center',
  imageSize: 'full'
}

export default Banner;
