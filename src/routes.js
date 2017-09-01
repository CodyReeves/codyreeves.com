import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import SideProject from './containers/SideProjects';
import ContactPage from './containers/Contact';
import CasesPage from './containers/Cases';
import ServicesPage from './containers/Services';
import BlogPage from './containers/Blog';

const routes = (
  <Route onUpdate={() => window.scrollTo(0, 0)} path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="contact" component={ContactPage} />
    <Route path="design-process" component={ServicesPage} />
    <Route path="side-projects" component={SideProject} />
    <Route path="cases" component={CasesPage} />
    <Route path="blog" component={BlogPage} />
  </Route>
);

export default routes;
