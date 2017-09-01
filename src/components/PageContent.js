import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const propTypes = {
  className: PropTypes.string,
  heading: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  quote: PropTypes.string,
  linkUrl: PropTypes.string,
  linkTitle: PropTypes.string,
};

const defaultProps = {
  className: '',
  heading: '',
  image: '',
  text: '',
  quote: '',
  linkUrl: '',
  linkTitle: '',
};

function PageContent({
  className,
  heading,
  image,
  text,
  quote,
  linkUrl,
  linkTitle,
}) {
  return (
    <div className={`${className} content-wrapper clearfix`}>
      {heading &&
        <div className="heading">
          <h3>{heading}</h3>
        </div>}
      {image &&
        <div className="image">
          {/* <img className="img-responsive" src={image} role="presentation"/> */}
          <Image
            image={image}
          />
        </div>}
      {text &&
        <div className="text">
          <p>{text}</p>
        </div>}
      {quote &&
        <div className="quote">
          <blockquote>{quote}</blockquote>
        </div>}
      {linkUrl &&
        <div className="link">
          <a href={linkUrl} title={linkTitle}>{linkTitle}</a>
        </div>}
    </div>
  );
}

PageContent.PropsTypes = propTypes;
PageContent.defaultProps = defaultProps;

export default PageContent;
