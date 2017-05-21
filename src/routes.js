import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import HomePage from './components/HomePage'
import PortfolioPage from './components/Portfolio'
import ContactPage from './components/Contact'
import CasesPage from './components/Cases'
import ServicesPage from './components/Services'

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="home" component={HomePage}/>
		<Route path="contact" component={ContactPage} />
		<Route path="services" component={ServicesPage} />
		<Route path="cases" component={CasesPage} />
		<Route path="portfolio" component={PortfolioPage} />
	</Route>
)

export default routes
