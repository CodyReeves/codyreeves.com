import React from 'react'
import PageSection from './PageSection'
import ContactForm from './ContactForm'

const ContactPage = () => {
  const content = {
    title: 'Material Design Lite',
    article: 'lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.'
  }

  return (
    <div>
      <PageSection
        type="special"
        className="contact"
        titleLarge="Contact"
        titleSmall="Contact Contact Contact Contact"
        container="true"
        textFollow="Talk To Me"
      >
        <div className="col-xs-12 col-sm-4">
          <p>lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.</p>
          <p>lets you add a Material Design look and feel to your websites. It doesn’t rely on any JavaScript frameworks and aims to optimize for cross-device use, gracefully degrade in older browsers, and offer an experience that is immediately accessible. Get started now.</p>
        </div>
        <div className="col-xs-12 col-sm-8">
          <h5>Heading is here</h5>
          <h6>Heading is here</h6>
          <ContactForm />
        </div>
      </PageSection>
    </div>
  )
}


export default ContactPage