import React from 'react'
import { Link } from 'react-router'

const CaseSample = ({ imageUrl, imagePlacement, titleLarge, titleSmall, children  }) => {
  
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
                <div className="image" style={{ backgroundImage: 'url(' + imageUrl + ')' }}>
                </div>
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
  )
}

CaseSample.defaultProps = {
  imageUrl: '',
  imagePlacement: '', 
  titleLarge: '', 
  titleSmall: '',
}


export default CaseSample