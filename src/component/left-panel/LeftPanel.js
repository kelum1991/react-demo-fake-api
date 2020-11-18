import React, { Component } from 'react';
import {
  NavLink
} from "react-router-dom";

import './LeftPanel.scss';

class LeftPanel extends Component {
  render() { 
    return (
      <div className="app-dashboard__left-panel">
        <ul className="app-dashboard__left-panel__nav">
          <li className="app-dashboard__left-panel__nav-item">
            <NavLink to="/" className="app-dashboard__left-panel__nav-link" activeClassName="app-dashboard__left-panel__nav-link--active">Home</NavLink>
          </li>
          <li className="app-dashboard__left-panel__nav-item">
            <NavLink to="/dashboard" className="app-dashboard__left-panel__nav-link" activeClassName="app-dashboard__left-panel__nav-link--active">Dashboard</NavLink>
          </li>
          <li className="app-dashboard__left-panel__nav-item">
            <NavLink to="/design-system" className="app-dashboard__left-panel__nav-link" activeClassName="app-dashboard__left-panel__nav-link--active">Design System</NavLink>
          </li>
          <li className="app-dashboard__left-panel__nav-item">
            <NavLink to="/post" className="app-dashboard__left-panel__nav-link" activeClassName="app-dashboard__left-panel__nav-link--active">Posts</NavLink>
          </li>
          <li className="app-dashboard__left-panel__nav-item">
            <NavLink to="/topics" className="app-dashboard__left-panel__nav-link" activeClassName="app-dashboard__left-panel__nav-link--active">Topics</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
 
export default LeftPanel;