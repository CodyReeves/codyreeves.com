import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import Banner from './Banner';

const propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  videoMp4: PropTypes.string,
  videoWeb: PropTypes.string,
  isTab: PropTypes.bool,
};

const defaultProps = {
  imageUrl: '',
  title: '',
  subTitle: '',
  videoMp4: '',
  videoWeb: '',
  isTab: 'false',
};

function BannerVideo({
  imageUrl,
  title,
  subTitle,
  videoWeb,
  videoMp4,
  isTab,
}) {
  return (
    <div>
      <Banner imageUrl={imageUrl}>
        <h1 className="heading-special">
          <span>{title}</span>
        </h1>
        <h4 className="heading-top">
          <span>{subTitle}</span>
        </h4>
        <div className="video hidden-xs hidden-sm visible-md">
          <LazyLoad>
            {!isTab &&
              <video
                className="hidden-xs hidden-sm visible-md" poster="./img/codyreeves-site.png" id="bgvid" playsInline autoPlay muted loop>
                {videoWeb &&
                  <source src={videoWeb} type="video/webm" />}
                {videoMp4 &&
                  <source src={videoMp4} type="video/mp4" />}
              </video>}
          </LazyLoad>
        </div>
        <div className="more">
          <a href="#about">Scroll</a>
        </div>
      </Banner>
    </div>
  );
}

BannerVideo.PropTypes = propTypes;
BannerVideo.defaultProps = defaultProps;

export default BannerVideo;
