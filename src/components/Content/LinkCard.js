import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const RoleRows = roles => {
  return roles.map(role => {
    return (
      <div key={role.title} className="wrapper clearfix">
        <p className="title">{role.title}
          <span className="skills">{role.skills}</span>
        </p>
      </div>
    );
  });
};

const propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  roles: PropTypes.any,
  content: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.string,
};

const defaultProps = {
  className: '',
  imageUrl: '',
  title: '',
  roles: '',
  content: '',
  link: '',
  icon: '',
};

function LinkCard({
  imageUrl,
  title,
  roles,
  content,
  link,
  icon,
  className,
}) {
  const classNameList = 'project clearfix';

  return (
    <div key={title} className={`${className} ${classNameList}`}>
      <div className="main-wrapper">
        <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
          <Image
            image={imageUrl}
            alt={title}
          />
          {icon &&
          <i className={`fa fa-${icon}`} />}
          <h2>{title}</h2>
          <a className="btn btn-cta" href={link} target="_blank" rel="noopener noreferrer">View Project</a>
          {RoleRows(roles)}
          <p className="over-right">{content}</p>
        </div>
      </div>
    </div>
  );
}

LinkCard.PropTypes = propTypes;
LinkCard.defaultProps = defaultProps;

export default LinkCard;
