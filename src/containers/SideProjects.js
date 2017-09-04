import React, { Component } from 'react';
import { getSideProject, getSideProjectPage } from '../apis/sideProjects';
import PageSection from '../components/PageSection';
import PageHead from '../components/Head';
import Image from '../components/Image';
import LinkCard from '../components/LinkCard';

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

    const SideProjectRows = SideProject.map(row => {
      const imageUrl = row.imageUrl;
      const title = row.title;
      const roles = row.roles;
      const content = row.content;
      const link = row.link;
      const icon = row.icon;
      const className = row.className;

      return (
        <div key={title} className="col-xs-12 col-sm-4 no-pad-md">
          <LinkCard
            className={className}
            imageUrl={imageUrl}
            title={title}
            roles={roles}
            content={content}
            link={link}
            icon={icon}
          />
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
