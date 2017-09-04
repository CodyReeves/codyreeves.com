import React, { Component } from 'react';
import ContactFormWrapper from '../components/Contact/ContactFormWrapper';
import PageHead from '../components/Head';

class ContactPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <PageHead
          title="Lets Chat! Contact Cody Reeves"
          description="Contact Cody Reeves if you would like to chat about anything and everything about web design & development."
          url="http://codyreeves.com/contact"
        />
        <ContactFormWrapper />
      </div>
    );
  }
}

export default ContactPage;
