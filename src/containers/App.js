import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function App({ children }) {
  return (
    <div className="App container-fluid no-padding">
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
