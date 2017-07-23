import React, { Component } from 'react';
import Banner from './Banner';
import { getCases, getCaseIntro } from '../apis/cases';
import PageSection from './PageSection.js';
class Case extends Component {
	componentDidMount () {
		window.scrollTo(0, 0)
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

	const RoleRows = (roles) => {
		return roles.map((role) => {
			const title = role.title;
			const skills = role.skills;
			const task = role.task;
			const tech = role.tech;
			const complete = role.complete;

			return (
				<div key={title} className="case-detail-wrapper clearfix row">
					<div className="task col-xs-12 col-sm 6">
						<h3>The Task</h3>
						<p>{task}</p>
					</div>
					<div className="about col-xs-12 col-sm 6">
						<p className="title"><strong>Role:</strong> {title}</p>
						<p><strong>Skills & Tools:</strong> {tech}
						<span className="skills">{skills}</span></p>
						<p className="completed"><strong>Completed:</strong> {complete}</p>
					</div>
				</div>
			)
		});
	}

	const ContentRows = (contents) => {
		return contents.map((content) => {
			const align = content.align;
			const className = content.classname;
			const heading = content.heading;
			const image = content.image;
			const text = content.text;
			const quote = content.quote;

			return (
				<div key={align} id={align} className={`${className} content-wrapper clearfix`}>
					{heading &&
						<div className="heading">
							<h3>{heading}</h3>
						</div>}
					{image &&
						<div className="image">
							<img className="img-responsive" src={image} role="presentation"/>
						</div>}
					{text &&
						<div className="text">
							<p>{text}</p>
						</div>}
					{quote &&
						<div className="quote">
							<blockquote>{quote}</blockquote>
						</div>}
				</div>
			)
		});
	}

    const CaseRows = cases.map((row) => {
		const align = row.align;
		const classNameSet = 'case-item clearfix';
		const classname = row.classname;
		const title = row.title;
		const bannerImage = row.bannerImg;
		const link = row.link;
		const github = row.github;
		const tags = row.tags;
		const roles = row.roles;
		const content = row.contents;

        return (
            <div key={align} className={`${classNameSet} ${classname}`}>
				<div>
					<Banner imageSize="full" imageUrl={bannerImage} 
					>
						<h2>{title}</h2>
						<div className="details text-center">
							{link &&
								<a className="btn btn-cta" ref={link} target="_blank">Visit site</a>}
							{github && 
								<a className="btn-cta github" href={github} target="_blank"><i className="fa fa-github"></i></a>}
							<span className="tags">{tags}</span>
							{/*<button 
								className="center btn btn-primary"
								onClick=""
							>
								Show More
							</button>*/}
						</div>
					</Banner>
					<div className="container contents-wrapper">
						<div className="set-background">
							{RoleRows(roles)}
							{ContentRows(content)}
						</div>
					</div>
				</div>
			</div>
        )
    });

    return (
        <div className="cases-wrapper">
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