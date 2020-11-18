import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Photos from '../photos/Photos';
import AlbumsList from '../album-list/AlbumList';

function Albums() {

  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <AlbumsList />
        </Route>
        <Route path={`${path}/:id`}>
          <Photos />
        </Route>
      </Switch>
    </>
  )
}
 
export default Albums;