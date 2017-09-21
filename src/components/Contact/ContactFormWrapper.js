import React, { Component } from 'react';
import PageSection from '../Content/PageSection';
import ContactForm from './ContactForm';
import { getContact } from '../../apis/siteContent';

class ContactFormWrapper extends Component {

  render() {
    // Get content for contact form
    const ContactPageMap = getContact();

    // Render proper textareas
    const contactTextContent = ContactMap => {
      return ContactMap.map(textContent => {
        // Setting up data
        const key = textContent.key;
        const heading = textContent.heading;
        const text = textContent.text;

        return (
          <span key={key}>
            {heading &&
            <h3 className="font-400 mar-10-bottom">{heading}</h3>}

            {text &&
              <p>{text}</p>}
          </span>
        );
      });
    };

    const Contact = ContactPageMap.map(row => {
    // Setting up data
      const type = row.type;
      const titleSmall = row.titleSmall;
      const titleLarge = row.titleLarge;
      const followText = row.followText;
      const heading = row.heading;
      const subHeading = row.subHeading;
      const email = row.email;
      const location = row.location;
      const content = row.content;

      return (
        <div key={type}>
          <PageSection
            type="special"
            className={`contact ${type}`}
            titleLarge={titleLarge}
            titleSmall={titleSmall}
            container="true"
            textFollow={followText}
          >
            <div className="col-xs-12 col-sm-4">
              {contactTextContent(content)}
            </div>
            <div className="col-xs-12 col-sm-8">
              <div className="pad-30-top pad-30-bottom">
                <span className="email"><a href={`mailto:${email}`}>{email}</a></span><br />
                <span className="location">{location}</span>
                {heading &&
                <h5>{heading}</h5>}
                {subHeading &&
                <h6>{subHeading}</h6>}
              </div>
              <ContactForm />
            </div>
          </PageSection>
        </div>
      );
    });

    return (
      <div>
        {Contact}
      </div>
    );
  }
}


export default ContactFormWrapper;
