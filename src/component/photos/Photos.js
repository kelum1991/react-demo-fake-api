import React, {Component} from 'react';

import Photo from '../photo/Photo';
import Skeleton from '@material-ui/lab/Skeleton';

import 'react-placeholder/lib/reactPlaceholder.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch, 
  withRouter
} from "react-router-dom";

import './Photos.scss';


class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
      albumId: 1
    };
  }

  //executes once after page load
  componentDidMount() {

    this.setState({albumId: this.props.match.params.id});

    //get shows and update state
    setTimeout(async () => {
        const showResponse = await fetch('https://jsonplaceholder.typicode.com/albums/' + this.state.albumId + '/photos');
        const photos = await showResponse.json();
        this.setState({photos: photos});
        console.log(this.state.albumId);
    }, 2000);

  }

  render() { 
    return (
      <>
        <h2>Album: #{this.state.albumId}</h2>
        <div className="app-dashboard__photo-list">  
          {this.state.photos && this.state.photos.map((photo) => 
            <Photo key={photo.id} img={photo.thumbnailUrl} title={photo.title} />
          )}
        </div>

        {console.log(this.state.photos)}
        {!this.state.photos && (
          <div className="skeleton-photo-list">
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
            <div className="skeleton-photo-list__item">
              <Skeleton variant="rect" width={150} height={150} />
              <Skeleton variant="caption" width={150} height={10} />
            </div>
          </div>
        )}
      </>
    );
  }
}
 
export default withRouter(Photos);