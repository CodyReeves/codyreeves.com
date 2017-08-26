import React, { Component } from 'react';
import ReactGoogleSheetConnector, { GoogleTable } from 'react-google-sheet-connector';
import { Helmet } from 'react-helmet';


class BlogPage extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Articles | Cody Reeves</title>
          <meta name="description" content="Contact Cody Reeves if you would like to chat about anything and everything about web design & development." />
          <meta property="og:title" content="Contact Cody Reeves" />
          <meta property="og:description" content="Contact Cody Reeves if you would like to chat about anything and everything about web design & development." />
          <meta property="og:url" content="http://codyreeves.com/contact" />
        </Helmet>
        <ReactGoogleSheetConnector
          apiKey="AIzaSyC9dASlWdFWCAM8NC6Mtoqs_dXmVoh_Qt4"
          spreadsheetId="1jTiVMTJDFB0Fj_eylRbUX3HxuWWIRmOwckEnX0dGFFU"
          spinner={<div className="loading-spinner" />}
        >
          <div>
            This content will be rendered once the data has been fetched from the spreadsheet.
            
          </div>
        </ReactGoogleSheetConnector>
      </div>
    )
  }
}

export default BlogPage;
