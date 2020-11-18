import React from 'react';

import './Photo.scss';

function Photo(props) {
  return(
    <div className="photo">
      <img src={props.img} alt="" />
      <h5>{props.title}</h5>
    </div>
  )
}

export default Photo;