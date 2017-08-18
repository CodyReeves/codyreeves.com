import React, { Component } from 'react'
import { Link } from 'react-router'

const defaultProps = {
	className: '',
	buttonClassName: 'text-center btn-cta'
}

class SideProjectButton extends Component {
	render() {
		const { className, buttonClassName } = this.props;

		return (
			<div className={`side-project-button-wrapper pad-10 bg-white text-center ${className}`}>
				<hr/>
				<p>Browse my personal "for fun" web development and design projects.</p>
				<Link className={buttonClassName} to="side-projects">View Side Projects</Link>
			<hr/>
		</div>
		)
	}
}

SideProjectButton.defaultProps = defaultProps;

export default SideProjectButton
