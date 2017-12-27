import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import logo from '../images/logo.svg';

function contentClass(isShow) {
  if (isShow) {
    return 'active';
  }
  return '';
}

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

class Sidebar extends Component {
  // TODO:: Switch toggle of state instead of input click
  constructor(props) {
    super(props);
    this.state = { isShow: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isShow: !this.state.isShow });
  }

  render() {
    const { className } = this.props;

    const { isShow } = this.state;

    const buttonClassName = '';

    return (
      <div>
        <button
          id="sidebarToggle"
          className={`sidebar-toggle-label ${contentClass(isShow)}`}
          htmlFor="sidebarToggle"
          onClick={this.handleClick}
        >
          Menu
        </button>
        <header className={`sidebar ${className}`}>
          <a className="header-email" href="mailto:cody@withdesign.ca">
            Cody@withdesign.ca
          </a>
          <Link className="logo" to="/">
            <img
              src={logo}
              className="img-responsive"
              alt="Cody Reeves | Digital Design"
            />
          </Link>
          <div id="sidebarContent" className="sidebar-content">
            <button
              className="sidebar-close"
              onClick={this.handleClick}
            />
            <nav className={`nav ${className}`}>
              <ul className="list-plain no-pad no-mar">
                <li>
                  <Link
                    className={buttonClassName}
                    to="/"
                    onClick={this.handleClick}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={buttonClassName}
                    to="cases"
                    onClick={this.handleClick}
                  >
                    Cases
                  </Link>
                </li>
                {/* <li><Link className={buttonClassName} to="design-process">Design Process</Link></li> */}
                <li>
                  <Link
                    className={buttonClassName}
                    to="side-projects"
                    onClick={this.handleClick}
                  >
                    Side Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className={buttonClassName}
                    to="contact"
                    onClick={this.handleClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="copyright text-center">
              © 2017 by Cody Reeves. All rights reserved.
            </div>
          </div>
          <div className="social">
            <ul className="list-inline">
              <li><a href="https://www.behance.net/codyreeves" target="_blank" rel="noopener noreferrer">Behance</a></li>
              <li><a href="https://www.linkedin.com/in/cody-reeves-5a805459/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/CodyReeves/" target="_blank" rel="noopener noreferrer">Github</a></li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

Sidebar.PropTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
