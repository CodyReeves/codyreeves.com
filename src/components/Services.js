import React from 'react'
import Banner from './Banner'
import PageSection from './PageSection'
import BannerImageUrl from '../images/example.jpg'

const ServicesPage = () => {
  const content = {
    title: 'Material Design Lite',
    article: 'lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.'
  }

  return (
    <div>
      <div>
        <Banner imageSize="half" imageUrl={BannerImageUrl}>
          <h1><span className="">text</span></h1>
        </Banner>
      </div>
      <div>
        <PageSection>
          <strong>{content.title}</strong>
          <p>{content.article}</p>
        </PageSection>
      </div>
    </div>
  )
}


export default ServicesPage