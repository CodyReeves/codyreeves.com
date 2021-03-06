import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageSection from '../components/Content/PageSection';
import PageContent from '../components/Content/PageContent';
import PageHead from '../components/Head';

// TODO:: Remove/move this
const services = {
  classname: 'services-page',
  titleLarge: 'Process',
  titleSmall: 'The methods I use when designing and developing my projects.',
  followText: 'The Process',
  title: 'UI/UX',
  article: 'Client requested the perfered colors green. Ideally in a shape of a badge that colud be used on a variety of products. The feeling of organic, healthy living, treat body right, rustic/roots forming.',
  contents: [
    {
      align: '1',
      classname: 'bg-white',
      heading: 'Part One: Branding',
      text: 'Client requested the perfered colors green. Ideally in a shape of a badge that colud be used on a variety of products. The feeling of organic, healthy living, treat body right, rustic/roots forming.',
    },
    {
      align: '2',
      classname: '',
      text: 'Client requested the perfered colors green. Ideally in a shape of a badge that colud be used on a variety of products. The feeling of organic, healthy living, treat body right, rustic/roots forming.',
    },
  ],
};

const propTypes = {
  className: PropTypes.string,
  titleLarge: PropTypes.string.isRequired,
  titleSmall: PropTypes.string,
  titleLargeClass: PropTypes.string,
  titleSmallClass: PropTypes.string,
  followText: PropTypes.string,
  contents: PropTypes.string,
};

const defaultProps = {
  className: services.className,
  titleLarge: services.titleLarge,
  titleSmall: services.titleSmall,
  titleLargeClass: services.titleLargeClass,
  titleSmallClass: services.titleSmallClass,
  followText: services.followText,
  contents: services.contents,
};

class ServicesPage extends Component {
  render() {
    const {
      className,
      titleLarge,
      titleSmall,
      titleSmallClass,
      titleLargeClass,
      followText,
      contents,
    } = this.props;

    const ContentRows = contents => {
      return contents.map(content => {
        const contentAlign = content.align;
        const contentClassName = content.classname;
        const contentHeading = content.heading;
        const contentImage = content.image;
        const contentText = content.text;
        const contentQuote = content.quote;
        const contentLinkUrl = content.linkUrl;
        const contentLinkTitle = content.linkTitle;
        return (
          <div key={contentAlign} id={contentAlign}>
            <PageContent
              className={contentClassName}
              heading={contentHeading}
              image={contentImage}
              text={contentText}
              quote={contentQuote}
              linkUrl={contentLinkUrl}
              linkTitle={contentLinkTitle}
            />
          </div>
        );
      });
    };

    return (
      <div>
        <PageHead
          title={'{titleLarge} | Cody Reeves'}
          description={`${followText} - ${titleSmall}`}
          url="http://codyreeves.com/"
        />
        <div className="services-page-wrapper">
          <PageSection
            type="special"
            container="true"
            className={className}
            titleLarge={titleLarge}
            titleSmall={titleSmall}
            titleLargeClass={titleLargeClass}
            titleSmallClass={titleSmallClass}
            textFollow={followText}
          >
            <div className="text-content">
              <strong>{services.title}</strong>
              <p>{services.article}</p>
            </div>
            <div className="more">
              Show More
            </div>
          </PageSection>
        </div>
        <div className="container">
          <div className="row no-margin">
            {ContentRows(contents)}
          </div>
        </div>
      </div>
    );
  }
}

ServicesPage.PropTypes = propTypes;
ServicesPage.defaultProps = defaultProps;

export default ServicesPage;
