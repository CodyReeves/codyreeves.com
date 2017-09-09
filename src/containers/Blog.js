import React, { Component } from 'react';
import ReactGoogleSheetConnector from 'react-google-sheet-connector';
import { Helmet } from 'react-helmet';
import PostPage from '../components/Posts/PostPage';
import { getArticleIntro } from '../apis/articles';
import PageSection from '../components/Content/PageSection';

class BlogPage extends Component {
  render() {
    const intro = getArticleIntro();
    const classname = intro.classname;
    const titleLarge = intro.titleLarge;
    const titleSmall = intro.titleSmall;
    const titleLargeClass = intro.titleLargeClass;
    const titleSmallClass = intro.titleLargeClass;
    const followText = intro.followText;

    return (
      <div>
        <Helmet>
          <title>Articles | Cody Reeves</title>
          <meta name="description" content="Contact Cody Reeves if you would like to chat about anything and everything about web design & development." />
          <meta property="og:title" content="Contact Cody Reeves" />
          <meta property="og:description" content="Contact Cody Reeves if you would like to chat about anything and everything about web design & development." />
          <meta property="og:url" content="http://codyreeves.com/contact" />
        </Helmet>
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
          <br />
          <br />
          <div className="more">
            Scroll Down
          </div>
        </PageSection>
        <ReactGoogleSheetConnector
          apiKey="AIzaSyC9dASlWdFWCAM8NC6Mtoqs_dXmVoh_Qt4"
          spreadsheetId="1jTiVMTJDFB0Fj_eylRbUX3HxuWWIRmOwckEnX0dGFFU"
          spinner={<div className="loading-spinner" />}
        >
          <PostPage />
        </ReactGoogleSheetConnector>
      </div>
    );
  }
}

export default BlogPage;
