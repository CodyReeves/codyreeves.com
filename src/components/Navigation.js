import React from 'react'
import { Link } from 'react-router'

const Navigation = ({ className, buttonClassName }) => (
	<nav className={className}>
		<ul className="list-plain no-pad no-mar">
			<li><Link className={buttonClassName} to="/">Home</Link></li>
			<li><Link className={buttonClassName} to="portfolio">Portfolio</Link></li>
		</ul>
	</nav>
)

Navigation.defaultProps = {
	className: '',
	buttonClassName: 'mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'
}

export default Navigation