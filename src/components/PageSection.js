import React from 'react'

const PageSection = ({ className, container, colSize, imageUrl, imagePosition, children }) => (
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
  </section>
)

PageSection.defaultProps = {
  container:'',
  imageUrl: '',
  className: '',
  colSize: '12',
  imagePosition: 'first'
}

export default PageSection;
