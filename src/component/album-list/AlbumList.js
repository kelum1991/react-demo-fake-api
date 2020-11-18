import React, { Component } from 'react';

import Album from '../album/Album';

import './AlbumList.scss';

class AlbumsList extends Component {

  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  // Capitalize first letter of the sentence 
  capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  //executes once after page load
  componentDidMount() {
    //get posts and update state
    setTimeout(async () => {
        const showResponse = await fetch('https://jsonplaceholder.typicode.com/albums');
        const posts = await showResponse.json();
        this.setState({posts: posts});
        console.log(posts);
    }, 400)
  }

  render() { 
    return (
      <>
        <h1>All Albums</h1>
        <div className="albums-listing">  
          {this.state.posts && this.state.posts.map((item) => 
            <Album key={item.id} id={item.id} title={this.capitalize(item.title)} link={`albums/${item.id}`} />
          )}
        </div>

        {!this.state.posts && (
          <h2>Test</h2>
        )}
      </>
    );
  }
}
 
export default AlbumsList;