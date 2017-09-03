import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import ImageType from 'react-image-webp';

function convertWebp(imageUrl) {
  // Remove file types
  // TODO:: this is gross make better
  const slice1 = imageUrl.substring(0, imageUrl.indexOf('.png') !== -1 ? imageUrl.indexOf('.png') : imageUrl.length);
  const slice2 = slice1.substring(0, slice1.indexOf('.jpg') !== -1 ? slice1.indexOf('.jpg') : slice1.length);
  const slice3 = slice2.substring(0, slice2.indexOf('.jpeg') !== -1 ? slice2.indexOf('.jpeg') : slice2.length);
  const name = slice3.replace('../img/', '');

  // Add everything back
  const webpUrl = '../img/webp/' + name + '.webp';
  return webpUrl;
}

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

  const webpImage = convertWebp(image);
  return (
    <div>
      <LazyLoad>
        <ProgressiveImage src={image} placeholder={imageSmall}>
          {image =>
            <ImageType
              className="img-responsive"
              src={image}
              webp={webpImage}
              alt={alt}
              title={alt}
            />}
        </ProgressiveImage>
      </LazyLoad>
    </div>
  );
}

ImageWrapper.PropTypes = propTypes;
ImageWrapper.defaultProps = defaultProps;

export default ImageWrapper;
