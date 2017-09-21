import React from 'react';
import ProgressiveImage from 'react-progressive-bg-image';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element,
  imageUrl: PropTypes.string,
  contentPlacement: PropTypes.string,
  imageSize: PropTypes.string,
  placeholder: PropTypes.string,
  imageMobile: PropTypes.string,
};

const defaultProps = {
  contentPlacement: 'center',
  imageSize: 'full',
  placeholder: './img/loading-image.gif',
  children: '',
  imageUrl: '',
  imageMobile: '',
};

function Banner({
  imageUrl,
  imageSize,
  contentPlacement,
  children,
  placeholder,
  imageMobile,
}) {
  const isTab = window.innerWidth <= 992;
  return (
    <div className={`banner ${imageSize} banner-${contentPlacement}`}>
      {!isTab &&
        <ProgressiveImage
          placeholder={placeholder}
          src={imageUrl}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {children}
        </ProgressiveImage>}
      {isTab &&
        <ProgressiveImage
          placeholder={placeholder}
          src={imageMobile}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          {children}
        </ProgressiveImage>}
    </div>
  );
}

Banner.PropTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
