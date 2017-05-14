import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import HomePage from './components/HomePage'
import PortfolioPage from './components/Portfolio'
const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="home" component={HomePage}/>
		<Route path="portfolio" component={PortfolioPage} />
	</Route>
)

export default routes
