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

function PostCard({
  className,
  title,
  image,
  placeholder,
  date,
  exerpt,
  category,
}) {
  return (
    <div className={`post-card ${className}`}>
      <ProgressiveImage
        placeholder={placeholder}
        src={image}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      />
      {title}
      {date}
      {exerpt}
      {category}
    </div>
  );
}

PostCard.PropTypes = propTypes;
PostCard.defaultProps = defaultProps;

export default PostCard;
