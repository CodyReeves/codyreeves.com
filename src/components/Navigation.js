import React from 'react'
import { Link } from 'react-router'

const Navigation = ({ className, buttonClassName }) => (
	<nav className={`nav ${className}`}>
		<ul className="list-plain no-pad no-mar">
			<li><Link className={buttonClassName} to="/">Home</Link></li>
			<li><Link className={buttonClassName} to="cases">Cases</Link></li>
			<li><Link className={buttonClassName} to="skills">Skills</Link></li>
			<li><Link className={buttonClassName} to="side-projects">Side Projects</Link></li>
			<li><Link className={buttonClassName} to="contact">Contact</Link></li>
		</ul>
	</nav>
)

Navigation.defaultProps = {
	className: '',
	buttonClassName: ''
}

export default Navigation