import React from 'react'

const PageSection = ({ type, className, container, colSize, imageUrl, imagePosition, textFollow, titleLarge, titleSmall, titleSmallClass, titleLargeClass, children }) => (
  <div>
  {type === 'default' &&
    <section className={`${className} content-block`}>
      <div className={container ? 'container' : ''}>
        <div className="row no-margin">
          {imageUrl &&
            <div className={`image-block ${imagePosition}-sm col-xs col-sm`}>
              <img
                src={imageUrl}
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
      </section>
    }
  </div>
)

PageSection.defaultProps = {
  type: 'default',
  container:'',
  imageUrl: '',
  className: '',
  colSize: '12',
  imagePosition: 'first',
  textFollow: '', 
  titleLarge: '',
  titleLargeClass: '',
  titleSmall: '',
  titleSmallClass: ''
}

export default PageSection;
