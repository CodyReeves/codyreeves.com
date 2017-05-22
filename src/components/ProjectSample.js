import React from 'react'
import PageSection from './PageSection'
import { getPortfolio } from '../apis/cases';

const ProjectSample = () => {
  const content = {
    title: 'Material Design Lite',
    article: 'lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.'
  }

  return (
      <div className="sample right">
        <div className="row">
          <div className="col-xs-12 col-sm card">
            <a href="#">
              <h3>This the title</h3>
              <div className="image-wrapper">
                <img src={ImageUrl} className="img-responsive" />
                <div className="image" style={{ backgroundImage: 'url(' + ImageUrl + ')' }}>
                </div>
              </div>
            </a>
            <h3 className="title-lg">This the title</h3>
          </div>
          <div className="col-xs-12 col-sm-3 details">
            <div className="details-wrapper">
              <strong>text is here</strong><br />
              <span>text is here </span><br />
              <span>text is here </span><br />
              <p>text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here text is here
								</p>
              <a className="btn-more" href="#">See More</a>
            </div>
          </div>
        </div>
      </div>
  )
}


export default ProjectSample