import React, { Component } from 'react';
import { getSideProject, getSideProjectPage } from '../apis/sideProjects';
import PageSection from '../components/PageSection';
import PageHead from '../components/Head';
import Image from '../components/Image';

class SideProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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

    const RoleRows = roles => {
      return roles.map(role => {
        return (
          <div key={role.title} className="wrapper clearfix">
            <p className="title">{role.title}
              <span className="skills">{role.skills}</span></p>
          </div>
        );
      });
    };

    const SideProjectRows = SideProject.map(row => {
      const rowClassName = 'project clearfix col-xs-12 col-sm-4';
      const imageUrl = row.imageUrl;
      const title = row.title;
      const roles = row.roles;
      const content = row.content;
      const link = row.link;
      const icon = row.icon;

      return (
        <div key={title} className={rowClassName}>
          <div className="main-wrapper">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
              <Image
                image={imageUrl}
                alt={titleLarge}
              />
              {icon &&
              <i className={`fa fa-${icon}`} />
              }
              <h2>{title}</h2>
              <a className="btn btn-cta" href={link} target="_blank" rel="noopener noreferrer">View Project</a>
              {RoleRows(roles)}
              <p className="over-right">{content}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="posts">
        <PageHead
          title="Side Projects | Cody Reeves"
          description={`A small collection of side projects that Cody is actively working on. ${titleSmall}`}
          url="http://codyreeves.com/side-projects"
        />
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

export default SideProjectPage;
