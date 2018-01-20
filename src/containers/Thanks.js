import React, { Component } from 'react';
import PageSection from '../components/Content/PageSection';
import PageHead from '../components/Head';

class ThanksPage extends Component {
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
        <PageSection
          type="special"
          container="true"
          className="thanks-wrapper bump-up"
          titleLarge="Thanks!"
          titleSmall="I will get back to you as soon as possible."
        >
          <div className="info">
            <a href="/cases" className="btn-cta">See Case Studies</a><br /><br />
            <small><a href="/" className="link"> Back To Home</a></small>
          </div>
        </PageSection>
      </div>
    );
  }
}

export default ThanksPage;
