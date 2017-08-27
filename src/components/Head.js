import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const defaultProps = {
  title: 'Cody Reeves | Digital Design & Development',
  description: 'Im Cody Reeves, a full time designer/developer and a part time entrepreneur. I have 4+ years of experience, working on wide variety of projects from designing company brands to developing enterprise software.',
  url: 'http://codyreeves.com/',
};

function PageHead({
    title,
    description,
    url,
  }) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
      </Helmet>
    </div>
  );
}

PageHead.PropTypes = propTypes;
PageHead.defaultProps = defaultProps;

export default PageHead;
