import React from 'react';
import ProgressiveImage from 'react-progressive-bg-image';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  placeholder: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  exerpt: PropTypes.string,
};

const defaultProps = {
  className: '',
  title: '',
  image: '',
  placeholder: '',
  date: '',
  exerpt: '',
};

class PostCard extends Component {
constructor(props) {
  super(props);
  this.state = { isShow: false };
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.setState({ isShow: !this.state.isShow })
}

render() {
  const { className, title, image, placeholder, date,exerpt, category } = this.props;

  return (
    <div className="post-wrapper">
      <div className={`post-card ${className}`}>
        <ProgressiveImage
          placeholder={placeholder}
          src={image}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        />
        <h4>{title}</h4>
        <span className="date">{date}</span>
        <span className="category">{category}</span>
        <p className="exerpt">{exerpt}</p>
        <button
          className=""
          onClick={this.handleClick}
        />
      </div>
      {isShow &&
      <div className="post-content">
        {children}
      </div>}
    </div>
  );
}

PostCard.PropTypes = propTypes;
PostCard.defaultProps = defaultProps;

export default PostCard;
