import React, { Component } from 'react';
import { getPortfolio } from '../apis/portfolio';

class Portfolio extends Component {

  render() {

  	const portfolio = getPortfolio();
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

    const PortfolioRows = portfolio.map((row) => {
		const classname = 'portfolio_item clearfix';
        return (
            <div key={row.title} className={classname}>
				<h2><a href={row.link} target="_blank">(visit site)</a> {row.title}</h2>
				{RoleRows(row.roles)}
				<p>{row.content}</p>
			</div>
        )
    });

    return (
        <div className="posts">
        	{PortfolioRows}
        </div>
    );

  }
}

export default Portfolio;