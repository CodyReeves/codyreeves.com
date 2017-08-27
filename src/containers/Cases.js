import React, { Component } from 'react';
import Banner from '../components/Banner';
import { getCases, getCaseIntro } from '../apis/cases';
import PageSection from '../components/PageSection';
import PageContent from '../components/PageContent';
import PageHead from '../components/Head';
import Toggle from '../components/Toggle';

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
      const classNameSet = 'case-item clearfix';
      const rowClassName = row.classname;
      const title = row.title;
      const bannerImage = row.bannerImg;
      const link = row.link;
      const github = row.github;
      const tags = row.tags;
      const roles = row.roles;
      const content = row.contents;

      return (
        <div key={align} id={align} className={`${classNameSet} ${rowClassName}`}>
          <div>
            <Banner
              imageSize="full" imageUrl={bannerImage}
            >
              <h2>{title}</h2>
              <div className="details text-center">
                {link &&
                  <a
                    className="btn btn-cta"
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >Visit site</a>}
                {github &&
                  <a
                    className="btn-cta github"
                    href={github}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github" />
                  </a>}
                <span className="tags">{tags}</span>
                {/* <button
                  className=""
                  onClick=""
                >
                  Show More
                </button> */}
              </div>
            </Banner>
            <Toggle
              className="content"
              btnTextClose="+ Open Case Study"
              btnTextOpen="- Close Case Study"
              contentClassName="container contents-wrapper"
              btnClass="center btn"
            >
              <div className="set-background">
                {RoleRows(roles)}
                {ContentRows(content)}
              </div>
            </Toggle>
          </div>
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
