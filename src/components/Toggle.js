import React, { Component } from 'react';
import PropTypes from 'prop-types';

function contentClass(isShow) {
  if (isShow) {
    return 'open';
  }
  return 'collapse';
}

const propTypes = {
  btnTextOpen: PropTypes.string.isRequired,
  btnTextClose: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  contentClassName: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

const defaultProps = {
  className: '',
  children: '',
  btnTextOpen: 'toggle',
  btnTextClose: 'toggle',
  contentClassName: '',
  btnClass: 'btn-cta',
};

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isShow: !this.state.isShow });
  }

  render() {
    const { children, className, btnClass, contentClassName, btnTextOpen, btnTextClose } = this.props;

    const { isShow } = this.state;

    return (
      <div className={`toggle-wrapper ${className}`}>
        <button className={`toggle ${btnClass} toggle-${contentClass(isShow)}`} onClick={this.handleClick} >
          <span data-open={btnTextOpen} data-close={btnTextClose} />
        </button>
        <div className={`${contentClass(isShow)} ${contentClassName}`} >
          {isShow &&
            <div>
              {children}
            </div>}
        </div>
      </div>
    );
  }
}

Toggle.PropTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;
