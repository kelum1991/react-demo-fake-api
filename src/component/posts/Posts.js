import React, { Component } from 'react';
import PostCard from '../post-card/PostCard';
import Skeleton from '@material-ui/lab/Skeleton';

import './Posts.scss';

class Posts extends Component {
  
  constructor(props) {
    super(props);
    this.state = {posts: []};
  }

  //executes once after page load
  componentDidMount() {
    //get posts and update state
    setTimeout(async () => {
        const showResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await showResponse.json();
        this.setState({posts: posts});
    }, 2000)
  }

  render() { 
    return (
      <>
      <h1>All Posts</h1>
      <div className="posts-listing">
        {this.state.posts ? this.state.posts.map(item => <PostCard image={`https://picsum.photos/id/${item.id * 2}/2000/1333`} title={item.title} body={item.body} author="Kelum Chathuranga" />) : <Skeleton /> } 
      </div>

      {!this.state.posts && (
        <Skeleton />
      )}
      </>
    );
  }
}
 
export default Posts;