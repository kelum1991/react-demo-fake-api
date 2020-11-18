import React from 'react';
import './PostCard.scss';

function PostCard(props) {
  return (
    <div className="post-card">
      <div className="post-card__image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="post-card__content">
        <h2 className="post-card__heading">{props.title}</h2>
        <p className="post-card__desc">{props.body}</p>

        <div className="post-card__info">
          <div className="post-card__author">
            <div className="post-card__author__avatar">
              <span className="post-card__author__avatar-img"></span>
            </div>
            <div className="post-card__author__name">{props.author}</div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default PostCard;