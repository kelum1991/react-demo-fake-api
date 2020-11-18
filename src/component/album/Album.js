import React from 'react';
import './Album.scss';

function Album(props) {
  return(
    <a href={props.link} className="link-override">
    <div className="album">
      
      <div className="album__text">
        <h3>{`${props.title}`} <br></br> {`#${props.id}`}</h3>
      </div>
      
    </div>
    </a>
  ) 
}

export default Album;