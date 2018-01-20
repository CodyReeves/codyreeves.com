import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import logo from '../images/logo.svg';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <div className="App container-fluid no-padding">
      <div className="app-loading">
        <div className="content">
          <img src={logo} alt="Cody Reeves" />
          <span>Loading...</span>
        </div>
      </div>
      <div className="row no-margin">
        <Sidebar />
        <main className="main-content col-xs-12 col-md">
          {children}
        </main>
      </div>
    </div>
  );
}

App.PropTypes = propTypes;

export default App;
