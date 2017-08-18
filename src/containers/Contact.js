import React, { Component } from 'react'
import ContactFormWrapper from '../components/ContactFormWrapper'
import { Helmet } from 'react-helmet';

class ContactPage extends Component {
  render() {

		return (
			<div>
        <Helmet>
					<title>Lets Chat! Contact Cody Reeves</title>
          <meta name="description" content="Contact Cody Reeves if you would like to chat about anything and everything about web design & development." />
          <meta property="og:title" content="Contact Cody Reeves"/>
          <meta property="og:description" content="Contact Cody Reeves if you would like to chat about anything and everything about web design & development."/>
          <meta property="og:url" content={`http://codyreeves.com/contact`}/>
				</Helmet>
				<ContactFormWrapper />
			</div>
		)
	}
}

export default ContactPage
