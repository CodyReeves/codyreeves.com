import React, { Component } from 'react';
import { getCases, getCaseIntro } from '../apis/cases';
import PageSection from '../components/PageSection';
import PageContent from '../components/PageContent';
import CaseIntro from '../components/CaseIntro';
import PageHead from '../components/Head';
import BannerCollapse from '../components/BannerPageSectionCollapse';

class Case extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const cases = getCases();
    const intro = getCaseIntro();

    const classname = intro.classname;
    const titleLarge = intro.titleLarge;
    const titleSmall = intro.titleSmall;
    const titleLargeClass = intro.titleLargeClass;
    const titleSmallClass = intro.titleLargeClass;
    const followText = intro.followText;

    const RoleRows = roles => {
      return roles.map(role => {
        const title = role.title;
        const skills = role.skills;
        const task = role.task;
        const tech = role.tech;
        const complete = role.complete;

        return (
          <div key={title}>
            <CaseIntro

              title={title}
              skills={skills}
              task={task}
              tech={tech}
              complete={complete}
            />
          </div>
        );
      });
    };

    const ContentRows = contents => {
      return contents.map(content => {
        const align = content.align;
        const className = content.classname;
        const heading = content.heading;
        const image = content.image;
        const text = content.text;
        const quote = content.quote;
        const linkUrl = content.linkUrl;
        const linkTitle = content.linkTitle;
        return (
          <div key={align} id={align}>
            <PageContent
              className={className}
              heading={heading}
              image={image}
              text={text}
              quote={quote}
              linkUrl={linkUrl}
              linkTitle={linkTitle}
            />
          </div>
        );
      });
    };

    const CaseRows = cases.map(row => {
      const align = row.align;
      const rowClassName = row.classname;
      const title = row.title;
      const bannerImage = row.bannerImg;
      const link = row.link;
      const github = row.github;
      const tags = row.tags;
      const roles = row.roles;
      const content = row.contents;

      return (
        <div key={align}>
          <BannerCollapse
            className={rowClassName}
            title={title}
            bannerImage={bannerImage}
            link={link}
            github={github}
            tags={tags}
            btnOpen="+ Open Case Study"
            btnClose="- Close Case Study"
          >
            {RoleRows(roles)}
            {ContentRows(content)}
          </BannerCollapse>
        </div>
      );
    });

    return (
      <div className="cases-wrapper">
        <PageHead
          title={`${titleLarge} | Cody Reeves`}
          description={`${titleLarge} - ${titleSmall}`}
          url={`http://codyreeves.com/${titleLarge}`}
        />
        <PageSection
          type="special"
          container="true"
          className={classname}
          titleLarge={titleLarge}
          titleSmall={titleSmall}
          titleLargeClass={titleLargeClass}
          titleSmallClass={titleSmallClass}
          textFollow={followText}
        >
          <div className="more">
            Scroll Down
          </div>
        </PageSection>
        {CaseRows}
      </div>
    );
  }
}

export default Case;
