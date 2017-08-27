import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-bg-image';
import PropTypes from 'prop-types';

const propTypes = {
  contentPlacement: PropTypes.string,
  imageSize: PropTypes.string,
  placeholder: PropTypes.string,
};

const defaultProps = {
  contentPlacement: 'center',
  imageSize: 'full',
  placeholder: 'Cody Reeves Digital Design & Development',
};

class Banner extends Component {
  render() {
    const { imageUrl, imageSize, contentPlacement, children, placeholder } = this.props;

    return (
      <div className={`banner ${imageSize} banner-${contentPlacement}`}>
        <ProgressiveImage placeholder={placeholder} src={imageUrl} style={{ backgroundSize: 'cover', backgroundPosition: 'top center' }}>
          {children}
        </ProgressiveImage>
      </div>
    );
  }
}

Banner.PropTypes = propTypes;
Banner.defaultProps = defaultProps;

export default Banner;
