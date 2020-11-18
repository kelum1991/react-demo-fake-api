import React, {Component} from "react";

import './ProfileCard.scss';

class ProfileCard extends Component {
  
  state = {
    name: '',
    bio: '',
    profileImg: 'https://picsum.photos/id/338/2000/1333',
    timezone: '',
    company: '',
    emailAddress: ''
  }

  render() { 
    return (
      <div className="profile-card">
        <div className="profile-card__body">
          <div className="profile-card__country"><strong>Country:</strong> {this.props.timezone}</div>
          <div className="profile-card__image">
            <img src="https://cdn5.vectorstock.com/i/1000x1000/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg" alt=""></img>
          </div>
          <div className="profile-card__info">
            {this.props.name && (
              <h4>{this.props.name}</h4>
            )}

            {!this.props.name && <h4>Loading</h4>}
            
            <p>Even being irrelevant to separate them in folders, it’s important to know the conceptual difference between one and other.</p>
          </div>
        </div>
        <div className='profile-card__footer'>
          <div className="profile-card__footer__block">
            <div className="profile-card__footer__block-wrapper">
              <div className="profile-card__footer__block-desc">
                <h6 className="profile-card__footer__block-heading">Company</h6>
                <span className="profile-card__footer__block-count">{this.props.company}</span>
              </div>
            </div>
          </div>
          <div className="profile-card__footer__block">
            <div className="profile-card__footer__block-wrapper">
              <div className="profile-card__footer__block-desc">
                <h6 className="profile-card__footer__block-heading">Email</h6>
                <span className="profile-card__footer__block-count">{this.props.emailAddress}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
 
export default ProfileCard;