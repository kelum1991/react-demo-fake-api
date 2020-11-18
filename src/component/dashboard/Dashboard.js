import React from "react";

import './Dashboard.scss';
import '../left-panel/LeftPanel.scss';

import {
  Switch,
  Route,
  useRouteMatch, 
  NavLink
} from "react-router-dom";

import Users from '../users/Users';
import Posts from '../posts/Posts';
import Albums from '../albums/Albums';

function Dashboard() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div className="app-dashboard">
      <div className="app-dashboard__main-grid">
      <div className="app-dashboard__left-panel">
        <ul className="app-dashboard__left-panel__nav">
            <li className="app-dashboard__left-panel__nav-item">
              <NavLink to={'/'} className="app-dashboard__left-panel__nav-link">Home</NavLink>
            </li>
            <li className="app-dashboard__left-panel__nav-item">
              <NavLink to={`${url}/users`} className="app-dashboard__left-panel__nav-link" activeClassName="app-dashboard__left-panel__nav-link--active">Users</NavLink>
            </li>
            <li className="app-dashboard__left-panel__nav-item">
              <NavLink to={`${url}/posts`}  className="app-dashboard__left-panel__nav-link" activeClassName="app-dashboard__left-panel__nav-link--active">Posts</NavLink>
            </li>
            <li className="app-dashboard__left-panel__nav-item">
              <NavLink to={`${url}/albums`}  className="app-dashboard__left-panel__nav-link" activeClassName="app-dashboard__left-panel__nav-link--active">Albums</NavLink>
            </li>
            <li className="app-dashboard__left-panel__nav-item">
              <NavLink to={`${url}/design-system`} className="app-dashboard__left-panel__nav-link" activeClassName="app-dashboard__left-panel__nav-link--active">Design System</NavLink>
            </li>
          </ul>
        </div>
        <div className="app-dashboard__body">
          <Switch>
            <Route exact path={path}>
              <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}/users`}>
              <Users /> 
            </Route>
            <Route path={`${path}/posts`}>
              <Posts/>
            </Route>
            <Route path={`${path}/albums`}>
              <Albums/>
            </Route>
            <Route path={`${path}/design-system`}>
              <h1>Design System</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;