import React, { Component } from 'react'
import Banner from '../components/Banner'
import PageSection from '../components/PageSection'
import BannerImageUrl from '../images/example.jpg'
import { Helmet } from 'react-helmet';

// TODO:: Remove/move this
const services = {
  classname: 'services-page',
  titleLarge: 'Skills',
  titleSmall: 'Design & Development',
  followText: 'Skills',
  title: 'Material Design Lite',
  article: 'lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.',
  article1: 'lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.',
}

const defaultProps = {
  className: services.className,
  titleLarge: services.titleLarge,
  titleSmall: services.titleSmall,
  titleLargeClass: services.titleLargeClass,
  titleSmallClass: services.titleSmallClass,
  followText: services.followText,
  article1: services.article1
}

class ServicesPage extends Component {
  render() {
    const { className, titleLarge, titleSmall, titleSmallClass, titleLargeClass, followText, article1 } = this.props;

    return (
      <div>
        <Helmet>
          <title>{titleLarge} | Cody Reeves</title>
        <meta name="description" content={`${followText} - ${titleSmall}`} />
        </Helmet>
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
          </PageSection>
        </div>
         <div className="row no-margin">
           <div className="col-xs-12 col-sm-6">
            <Banner imageSize="half" imageUrl={BannerImageUrl}>
              <h1><span className="">text</span></h1>
            </Banner>
          </div>
          <div className="col-xs-12 col-sm-6">
            <Banner imageSize="half" imageUrl={BannerImageUrl}>
              <h1><span className="">text</span></h1>
            </Banner>
          </div>
         </div>
         <div className="section-two bg-white pad-20">
            <p className="container">{article1}</p>
          </div>
      </div>
    )
  }
}

ServicesPage.defaultProps = defaultProps;

export default ServicesPage
