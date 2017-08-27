import React from 'react';
import ProgressiveImage from 'react-progressive-bg-image';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.element,
  imageUrl: PropTypes.string,
  contentPlacement: PropTypes.string,
  imageSize: PropTypes.string,
  placeholder: PropTypes.string,
};

const defaultProps = {
  contentPlacement: 'center',
  imageSize: 'full',
  placeholder: 'Cody Reeves Digital Design & Development',
  children: '',
  imageUrl: '',
};

function Banner({
  imageUrl,
  imageSize,
  contentPlacement,
  children,
  placeholder,
}) {
  return (
    <div className={`banner ${imageSize} banner-${contentPlacement}`}>
      <ProgressiveImage
        placeholder={placeholder}
        src={imageUrl}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        {children}
      </ProgressiveImage>
    </div>
  );
}

Banner.PropTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
