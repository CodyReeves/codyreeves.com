import React from 'react';
import PropTypes from 'prop-types';
import { Track, TrackDocument } from 'react-track';
import { tween } from 'react-imation';
import {
  topTop,
  topBottom,
  centerCenter,
  topCenter,
  bottomBottom,
  bottomTop,
  getDocumentRect,
  getDocumentElement,
  calculateScrollY,
} from 'react-track/tracking-formulas';

function positionAnimate(type) {
  if (type === 'Cases') {
    return 750;
  }
  if (type === 'about') {
    return 0;
  }
  return 400;
}

const propTypes = {
  type: PropTypes.string,
  container: PropTypes.string,
  imageUrl: PropTypes.string,
  className: PropTypes.string,
  colSize: PropTypes.number,
  imagePosition: PropTypes.string,
  textFollow: PropTypes.string,
  titleLarge: PropTypes.string,
  titleLargeClass: PropTypes.string,
  titleSmall: PropTypes.string,
  titleSmallClass: PropTypes.string,
};

const defaultProps = {
  type: 'default',
  container: '',
  imageUrl: '',
  className: '',
  colSize: '12',
  imagePosition: 'first',
  textFollow: '',
  titleLarge: '',
  titleLargeClass: '',
  titleSmall: '',
  titleSmallClass: '',
};

function PageSection({
  type,
  className,
  container,
  colSize,
  imageUrl,
  imagePosition,
  textFollow,
  titleLarge,
  titleSmall,
  titleSmallClass,
  titleLargeClass,
  children,
}) {
  return (
    <TrackDocument
      updateOnDidMount formulas={[getDocumentElement, getDocumentRect, calculateScrollY,
        topTop, topBottom, centerCenter, bottomTop, topCenter, bottomBottom, bottomTop]}
    >
      {(documentElement, documentRect, scrollY, topTop,
          topBottom, topCenter, centerCenter, bottomBottom, bottomTop) =>
            <Track component="div" formulas={[topBottom, centerCenter, topTop, topCenter, bottomTop]}>
              {(Div, posTopBottom, posCenterCenter, posTopTop, posTopCenter, posBottomBottom, posBottomTop) =>
                <Div
                  style={tween(scrollY, [
              [posTopBottom, { opacity: 0 }],
              [posTopCenter - positionAnimate(titleLarge), { opacity: 1 }],
              [posCenterCenter + positionAnimate(titleLarge), { opacity: 1 }],
              [posTopTop, { opacity: 1 }],
              [posBottomBottom, { opacity: 0 }],
              [posBottomTop - 500, { opacity: 0 }],
                  ])}
                >
                  {type === 'default' &&
                  <section className={`${className} content-block`}>
                    <div className={container ? 'container' : ''}>
                      <div className="row no-margin">
                        {imageUrl &&
                        <div className={`image-block ${imagePosition}-sm col-xs col-sm`}>
                          <img
                            src={`/img/${imageUrl}`}
                            className="img-responsive"
                            alt=""
                          />
                        </div>}
                        <div className={`text-block col-xs-${colSize} col-sm-${colSize}`}>
                          {children}
                        </div>
                      </div>
                    </div>
                  </section>}
                  {type === 'special' &&
                  <section className={`${className} special`}>
                    {textFollow &&
                    <div className="section-title"><span>{textFollow}</span></div>}
                    <div className={container ? 'container' : ''}>
                      {titleLarge &&
                      <h2 className={`back ${titleLargeClass}`}>{titleLarge}</h2>}
                      {titleSmall &&
                      <h3 className={`sub ${titleSmallClass}`}>{titleSmall}</h3>}
                      {imageUrl &&
                      <img
                        src={imageUrl}
                        className="img-responsive img-float"
                        alt=""
                      />}
                      <div className="row">
                        {children}
                      </div>
                    </div>
                  </section>}
                </Div>
            }</Track>
        }</TrackDocument>
  );
}

PageSection.PropTypes = propTypes;
PageSection.defaultProps = defaultProps;

export default PageSection;
