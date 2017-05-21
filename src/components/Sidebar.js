import React from 'react'
import Navigation from './Navigation'
import logo from '../images/logo.svg'
import { Link } from 'react-router'

function toggle() {
  function clickOut() {
    const element = document.getElementById('sidebarToggle');
    if (element) element.checked = false;
    delete document.onclick;
  }
  document.onclick = clickOut;
}

const Sidebar = ({ className }) => (
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
    <a className="header-email" href="maltio:">Email@email.com</a>
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
          <li><a href="#" target="_blank">Behance</a></li>
          <li><a href="#" target="_blank">Linkdin</a></li>
          <li><a href="#" target="_blank">Github</a></li>
      </ul>
      </div>
    </header>
  </div>
)

Sidebar.defaultProps = {
  className: '',
}

export default Sidebar