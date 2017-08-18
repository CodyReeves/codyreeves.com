import React, { Component } from 'react'
import Navigation from './Navigation'
import logo from '../images/logo.svg'
import { Link } from 'react-router'

const defaultProps = {
  className: '',
}

class Sidebar extends Component {
  render() {
    const { className } = this.props;
    function toggle() {
      function clickOut() {
        const element = document.getElementById('sidebarToggle');
        if (element) element.checked = false;
        delete document.onclick;
      }
      document.onclick = clickOut;
    }

    return (
      <div>
        <input
          type="checkbox"
          name="sidebarToggle"
          id="sidebarToggle"
          className="sidebar-toggle-input"
          onChange={toggle}
        />
        <label className="sidebar-toggle-label" htmlFor="sidebarToggle">
          Menu
        </label>
      <header className={`sidebar ${className}`}>
          <a className="header-email" href="maltio:hello@codyreeves.design">hello@codyreeves.design</a>
        <Link className="logo" to="/">
          <img
            src={logo}
            className="img-responsive"
            alt="Cody Reeves | Digital Design"
          />
        </Link>
          <div id="sidebarContent" className="sidebar-content">
            <span className="sidebar-close"></span>
            <Navigation />
            <div className="copyright text-center">
              © 2017 by Cody Reeves. All rights reserved.
            </div>
          </div>
          <div className="social">
            <ul className="list-inline">
              <li><a href="https://www.behance.net/codyreeves" target="_blank" rel="noopener">Behance</a></li>
              <li><a href="https://www.linkedin.com/in/cody-reeves-5a805459/" target="_blank" rel="noopener">Linkdin</a></li>
              <li><a href="https://github.com/CodyReeves/" target="_blank" rel="noopener">Github</a></li>
          </ul>
          </div>
        </header>
      </div>
    )
  }
}

Sidebar.defaultProps = defaultProps;

export default Sidebar
