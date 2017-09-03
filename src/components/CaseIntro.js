import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  skills: PropTypes.string,
  task: PropTypes.string,
  tech: PropTypes.string,
  complete: PropTypes.string,
};

const defaultProps = {
  title: '',
  skills: '',
  task: '',
  tech: '',
  complete: '',
};

function CaseIntro({
  title,
  skills,
  task,
  tech,
  complete,
}) {
  return (
    <div key={title} className="case-detail-wrapper clearfix row">
      <div className="task col-xs-12 col-sm-7">
        <h3>The Task</h3>
        <p>{task}</p>
      </div>
      <div className="about col-xs-12 col-sm-5">
        <p className="title"><strong>Role:</strong> {title}</p>
        <p><strong>Skills & Tools:</strong> {tech}
          <span className="skills">{skills}</span></p>
        <p className="completed"><strong>Completed:</strong> {complete}</p>
      </div>
    </div>
  );
}

CaseIntro.PropTypes = propTypes;
CaseIntro.defaultProps = defaultProps;

export default CaseIntro;
