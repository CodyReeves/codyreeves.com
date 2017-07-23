import React from 'react'
import Banner from './Banner'
import PageSection from './PageSection'
import BannerImageUrl from '../images/example.jpg'

const ServicesPage = () => {

  const services = {
    classname: 'services-page',
    titleLarge: 'Services',
    titleSmall: 'Design & Development',
    titleLargeClass: 'Service',
    titleSmallClass: 'Service',
    followText: 'Service',
    title: 'Material Design Lite',
    article: 'lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.',
    article1: 'lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.',
  }

  const classname = services.classname;
  const titleLarge = services.titleLarge;
  const titleSmall = services.titleSmall;
  const titleLargeClass = services.titleLargeClass;
  const titleSmallClass = services.titleSmallClass;
  const followText = services.followText;
  const article1 = services.article1;

  return (
    <div>
      <div className="services-page-wrapper">
        <PageSection
        	type="special"
          container="true"
          className={classname}
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
       <div className="row">
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


export default ServicesPage