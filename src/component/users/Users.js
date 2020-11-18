import React, { Component } from 'react';

import ReactPlaceholder from 'react-placeholder';
import ProfileCard from '../profile-card/ProfileCard';

import 'react-placeholder/lib/reactPlaceholder.css';

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {shows: null};
  }

  //executes once after page load
  componentDidMount() {

    //get shows and update state
    setTimeout(async () => {
        const showResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const shows = await showResponse.json();
        this.setState({shows: shows});
        console.log(shows);
    }, 100)
    
  }

  render() {
    return (
      <>   
      <h1>All Users</h1>
      <div className="app-dashboard__profile-list-wrapper">  
        {this.state.shows && this.state.shows.map((show) => 
          <div className="profile-list__item" key={show.id}>
            <ProfileCard name={show.name} bio="" profileImg={`https://picsum.photos/id/${show.id * 2}/2000/1333`} timezone={show.address.city} company={show.company.name} emailAddress={show.email} />
          </div>
        )}
        </div>

        {console.log(this.state.shows)}
        {!this.state.shows && (
          <ReactPlaceholder showLoadingAnimation={true} type='media' rows={7} />
        )}
      </>
    );
  }

}
 
export default Users;