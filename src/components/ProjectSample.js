import React from 'react'
import PageSection from './PageSection'
import { getPortfolio } from '../apis/portfolio';

const ProjectSample = () => {
  const content = {
    title: 'Material Design Lite',
    article: 'lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.'
  }

  return (
    <PageSection>
      <strong>{content.title}</strong>
      <p>{content.article}</p>
    </PageSection>
  )
}


export default ProjectSample