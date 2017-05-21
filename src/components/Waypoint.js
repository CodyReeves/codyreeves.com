import React, { PropTypes } from 'react'

/**
 * Calls a function when you scroll to the element.
 */
var Waypoint = React.createClass({
  propTypes: {
    onEnter: PropTypes.func,
    onLeave: PropTypes.func,
    // threshold is percentage of the height of the visible part of the
    // scrollable parent (e.g. 0.1)
    threshold: PropTypes.number,
  },

  _wasVisible: false,

  /**
   * @return {Object}
   */
  getDefaultProps: function () {
    return {
      threshold: 0.1,
      onEnter: function () { },
      onLeave: function () { },
    };
  },

  componentDidMount: function () {
    this.scrollableParent = this._findScrollableParent();
    this.scrollableParent.addEventListener('scroll', this._handleScroll);
    this.scrollableParent.addEventListener('resize', this._handleScroll);
    this._handleScroll();
  },

  componentDidUpdate: function () {
    // The element may have moved.
    this._handleScroll();
  },

  componentWillUnmount: function () {
    this.scrollableParent.removeEventListener('scroll', this._handleScroll);
    this.scrollableParent.removeEventListener('resize', this._handleScroll);
  },

  /**
   * Traverses up the DOM to find a parent container which has an overflow style
   * that allows for scrolling.
   *
   * @return {Object} the closest parent element with an overflow style that
   *   allows for scrolling. If none is found, the `window` object is returned
   *   as a fallback.
   */
  _findScrollableParent: function () {
    var node = this.getDOMNode();

    while (node.parentNode) {
      node = node.parentNode;

      if (node === document) {
        continue;
      }
      var style = window.getComputedStyle(node);

      var overflowY = style.getPropertyValue('overflow-y') ||
        style.getPropertyValue('overflow');

      if (overflowY === 'auto' || overflowY === 'scroll') {
        return node;
      }
    }

    // A scrollable parent element was not found, which means that we need to do
    // stuff on window.
    return window;
  },

  _handleScroll: function () {
    var isVisible = this._isVisible();

    if (this._wasVisible === isVisible) {
      // No change since last trigger
      return;
    }

    if (isVisible) {
      this.props.onEnter();
    } else {
      this.props.onLeave();
    }

    this._wasVisible = isVisible;
  },

  /**
   * @param {Object} node
   * @return {Number}
   */
  _distanceToTopOfScrollableParent: function (node) {
    if (this.scrollableParent !== window && !node.offsetParent) {
      throw new Error(
        'The scrollable parent of Waypoint needs to have positioning to ' +
        'properly determine position of Waypoint (e.g. `position: relative;`)'
      );
    }

    if (node.offsetParent === this.scrollableParent || !node.offsetParent) {
      return node.offsetTop;
    } else {
      return node.offsetTop + this._distanceToTopOfScrollableParent(node.offsetParent);
    }
  },

  /**
   * @return {boolean} true if scrolled down almost to the end of the scrollable
   *   parent element.
   */
  _isVisible: function () {
    var waypointTop = this._distanceToTopOfScrollableParent(this.getDOMNode());
    var contextHeight, contextScrollTop;

    if (this.scrollableParent === window) {
      contextHeight = window.innerHeight;
      contextScrollTop = window.pageYOffset;
    } else {
      contextHeight = this.scrollableParent.offsetHeight;
      contextScrollTop = this.scrollableParent.scrollTop;
    }

    var thresholdPx = contextHeight * this.props.threshold;

    var isAboveBottom = contextScrollTop + contextHeight >= waypointTop - thresholdPx;
    var isBelowTop = contextScrollTop <= waypointTop + thresholdPx;

    return isAboveBottom && isBelowTop;
  },

  /**
   * @return {Object}
   */
  render: function () {
    // We need an element that we can locate in the DOM to determine where it is
    // rendered relative to the top of its context.
    return React.createElement('span', { style: { fontSize: 0 } });
  }
});

var WaypointExample = React.createClass({
  getInitialState: function () {
    return {};
  },

  _setMessage: function (msg) {
    this.setState({ message: msg });
  },

  _renderMessage: function () {
    if (!this.state.message) {
      return;
    }

    return (
      <div className="message">
        {this.state.message}
      </div>
    );
  },

  render: function () {
    return (
      <div>
        {this._renderMessage()}
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />
        <div className="waypoint-line" />
        <Waypoint
          onEnter={this._setMessage.bind(this, 'Waypoint entered')}
          onLeave={this._setMessage.bind(this, 'Waypoint left')}
          threshold={0}
        />
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />
        <div className="spacer" />
      </div>
    );
  }
});
export default WaypointExample
// React.render(<WaypointExample />, document.body);