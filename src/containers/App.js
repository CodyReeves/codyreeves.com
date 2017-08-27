import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';

const propTypes = {
  children: PropTypes.element.isRequired,
};

class App extends Component {
  render() {
    const { children } = this.props;
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
}

App.PropTypes = propTypes;

export default App;
