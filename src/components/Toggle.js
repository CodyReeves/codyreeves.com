import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
};

const defaultProps = {
  className: '',
  children: '',
  text: 'toggle',
};

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active: false,
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    const { children, className, text } = this.props;
    return (
      <div className={className}>
        <button
          className="toggle"
          onClick={this.toggleClass}
        >
          <p>{text}</p>
        </button>
        <div className={this.state.active ? 'active' : null} >
          {children}
        </div>
      </div>
    );
  }
}

constructor(props){
    super(props);
}

getInitialState(){
  return {"showHideSidenav":"hidden"};
}

// render() {
//     return (
//         <div className="header">
//             <i className="border hide-on-small-and-down"></i>
//             <div className="container">
//                 <a ref="btn" onClick={this.toggleSidenav.bind(this)} href="#" className="btn-menu show-on-small"><i></i></a>
//                 <Menu className="menu hide-on-small-and-down"/>
//                 <Sidenav className={this.props.showHideSidenav}/>
//             </div>
//         </div>
//     )
// }
//
// toggleSidenav() {
//     var css = (this.props.showHideSidenav === "hidden") ? "show" : "hidden";
//     this.setState({"showHideSidenav":css});
// }

Toggle.PropTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
