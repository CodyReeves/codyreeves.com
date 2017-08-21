import React, { Component } from 'react'
import ProgressiveImage from 'react-progressive-image';


  const defaultProps = {
    image: '',
    imageSmall: './img/bg.jpg'
  };


class Image extends Component {

  render() {
    const { image, imageSmall } = this.props;

    return (
      <div>
        <ProgressiveImage src={image} placeholder={imageSmall}>
          {(image) => <img className="img-responsive" src={image}/>}
        </ProgressiveImage>
      </div>
    );
  }
}

Image.defaultProps = defaultProps;

export default Image
