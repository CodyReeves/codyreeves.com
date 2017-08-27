import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const propTypes = {
  imageUrl: PropTypes.string,
  imagePlacement: PropTypes.string,
  titleLarge: PropTypes.string,
  titleSmall: PropTypes.string,
};

const defaultProps = {
  imageUrl: '',
  imagePlacement: '',
  titleLarge: '',
  titleSmall: '',
};

class CaseSample extends Component {
  render() {
    const { imageUrl, imagePlacement, titleLarge, titleSmall, children } = this.props;

    return (
      <div className={`sample ${imagePlacement}`}>
        <div className="row">
          <div className="col-xs-12 col-sm card">
            <Link to="/cases">
              <h3>{titleSmall}</h3>
              <div className="image-wrapper">
                <img
                  src={imageUrl}
                  className="img-responsive"
                  alt={titleLarge}
                />
                <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
              </div>
            </Link>
            <h3 className="title-lg">{titleLarge}</h3>
          </div>
          <div className="col-xs-12 col-sm-3 details">
            <div className="details-wrapper">
              {children}
              <Link className="btn-more" to="/cases">See More</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CaseSample.PropTypes = propTypes;
CaseSample.defaultProps = defaultProps;

export default CaseSample;
