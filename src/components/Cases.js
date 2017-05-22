import React, { Component } from 'react';
import { getCases } from '../apis/cases';

class Case extends Component {

  render() {

  	const cases = getCases();
	const RoleRows = (roles) => {
		return roles.map((role) => {
			return (
				<div key={role.title} className="role_wrapper clearfix">
					<p className="role">Role</p>
					<p className="role_title">{role.title}<br />
					<span className="role_skills">{role.skills}</span></p>
				</div>
			)
		});
	}

	const ContentRows = (contents) => {
		return contents.map((content) => {
			return (
				<div key={content.align} className="role_wrapper clearfix">
					<p className="role">{content.heading}</p>
					<p className="role_title">{content.image}<br />
					
						<span className="role_skills">{content.text}</span></p>
				</div>
			)
		});
	}

    const CaseRows = cases.map((row) => {
		const classname = 'case-item clearfix';
        return (
            <div key={row.title} className={classname}>
				<h2><a href={row.link} target="_blank">(visit site)</a> {row.title}</h2>
				{row.tags}
				{RoleRows(row.roles)}
				{ContentRows(row.contents)}
			</div>
        )
    });

    return (
        <div className="posts">
        	{CaseRows}
        </div>
    );

  }
}

export default Case;