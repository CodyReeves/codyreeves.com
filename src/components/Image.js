import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

const propTypes = {
  image: PropTypes.string,
  imageSmall: PropTypes.string,
  alt: PropTypes.string,
};

const defaultProps = {
  image: '',
  alt: 'Cody Reeves Digital Design & Development',
  imageSmall: './img/loading-image.gif',
};

function ImageWrapper({ image, imageSmall, alt }) {
  return (
    <div>
      <LazyLoad>
        <ProgressiveImage src={image} placeholder={imageSmall}>
          {image => <img className="img-responsive" src={image} alt={alt} />}
        </ProgressiveImage>
      </LazyLoad>
    </div>
  );
}


ImageWrapper.PropTypes = propTypes;
ImageWrapper.defaultProps = defaultProps;

export default ImageWrapper;
