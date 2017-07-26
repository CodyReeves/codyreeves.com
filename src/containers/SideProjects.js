import React, { Component } from 'react';
import { getSideProject, getSideProjectPage } from '../apis/sideProjects';
import PageSection from '../components/PageSection.js';

class SideProject extends Component {
  componentDidMount () {
		window.scrollTo(0, 0)
	}

  render() {
    const SideProject = getSideProject();
    const Intro = getSideProjectPage();
    const classname = Intro.classname;
    const titleLarge = Intro.titleLarge;
    const titleSmall = Intro.titleSmall;
    const titleLargeClass = Intro.titleLargeClass;
    const titleSmallClass = Intro.titleSmallClass;
    const text2 = Intro.text;

    const RoleRows = (roles) => {
      return roles.map((role) => {
        return (
          <div key={role.title} className="wrapper clearfix">
            <p className="title">{role.title}
              <span className="skills">{role.skills}</span></p>
          </div>
        )
      });
    }

    const SideProjectRows = SideProject.map((row) => {
      const classname = 'project clearfix col-xs-12 col-sm-4';
      const imageUrl = row.imageUrl;
      const title = row.title;
      const roles = row.roles;
      const content = row.content;
      const link = row.link;
      const icon = row.icon;

      return (
        <div key={title} className={classname}>
          <div className="main-wrapper">
             <div className="image" style={{ backgroundImage: 'url(' + imageUrl + ')' }}>
              <img 
                src={imageUrl} 
                className="img-responsive" 
                alt={titleLarge} 
              />
              {icon &&
                <i className={`fa fa-${icon}`} />
              }
              <h2>{title}</h2>
              <a className="btn btn-cta" href={link} target="_blank" rel="noopener">View Project</a> 
              {RoleRows(roles)}
              <p className="over-right">{content}</p>
            </div>
          </div>
        </div>
      )
    });

    return ( 
      <div className="posts">
        <PageSection
          type="special"
          container="true"
          className={classname}
          titleLarge={titleLarge}
          titleSmall={titleSmall}
          titleLargeClass={titleLargeClass}
          titleSmallClass={titleSmallClass}
        >
          <div className="text col-xs-12 col-sm-12">
            <p className="text">{text2}</p>
          </div>
          <div className="more">
            Scroll Down
          </div>
        </PageSection>
        <div className="container">
         <div className="row">
            {SideProjectRows}
         </div>
        </div>
      </div>
    );
  }
}

export default SideProject;