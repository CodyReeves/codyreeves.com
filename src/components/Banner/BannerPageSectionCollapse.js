import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './../Toggle';
import Banner from './Banner';

const propTypes = {
  id: PropTypes.string,
  rowClassName: PropTypes.string,
  title: PropTypes.string,
  bannerImage: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string,
  tags: PropTypes.string,
  btnOpen: PropTypes.string,
  btnClose: PropTypes.string,
  children: PropTypes.element.isRequired,
};

const defaultProps = {
  id: '',
  className: '',
  title: '',
  bannerImage: '',
  link: '',
  github: '',
  tags: '',
  btnOpen: '+ Open',
  btnClose: '- Close',
  children: '',
};

function BannerCollapse({
  id,
  className,
  title,
  bannerImage,
  link,
  github,
  tags,
  btnOpen,
  btnClose,
  children,
}) {
  const classNameSet = 'case-item clearfix';
  return (
    <div id={id} className={`${classNameSet} ${className}`}>
      <div>
        <Banner
          imageSize="full" imageUrl={bannerImage}
        >
          <h2>{title}</h2>
          <div className="details text-center">
            {link &&
              <a
                className="btn btn-cta"
                href={link}
                rel="noopener noreferrer"
                target="_blank"
              >Visit site</a>}
            {github &&
              <a
                className="btn-cta github"
                href={github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github" />
              </a>}
            <span className="tags">{tags}</span>
            {/* <button
              className=""
              onClick=""
            >
              Show More
            </button> */}
          </div>
        </Banner>
        <Toggle
          className="content"
          btnTextClose={btnOpen}
          btnTextOpen={btnClose}
          contentClassName="container contents-wrapper"
          btnClass="center btn"
        >
          <div className="set-background">
            {children}
          </div>
        </Toggle>
      </div>
    </div>
  );
}

BannerCollapse.PropTypes = propTypes;
BannerCollapse.defaultProps = defaultProps;

export default BannerCollapse;
