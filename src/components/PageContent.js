import React, { Component } from 'react'

const defaultProps = {
  className: '',
  heading: '',
  image: '',
  text: '',
  quote: '',
  linkUrl: '',
  linkTitle: ''
}

class PageContent extends Component {
  render() {
    const { className, heading, image, text, quote, linkUrl, linkTitle } = this.props;

    return (
      <div className={`${className} content-wrapper clearfix`}>
        {heading &&
          <div className="heading">
            <h3>{heading}</h3>
          </div>}
        {image &&
          <div className="image">
            <img className="img-responsive" src={image} role="presentation"/>
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
    )
  }
}

PageContent.defaultProps = defaultProps;

export default PageContent;
