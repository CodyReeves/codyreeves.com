import React from 'react'
import PageSection from './PageSection'

const ContactPage = () => {
  const content = {
    title: 'Material Design Lite',
    article: 'lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.'
  }

  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h1>Contact</h1>
              <p>lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.</p>
              <p>lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.</p>
            </div>
            <div className="col-xs-12 col-sm=6">
            {/* need form for client and regular */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ContactPage