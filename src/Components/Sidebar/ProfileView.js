import React from "react";
import "./ProfileView.css";
import avatar from '../../assets/avatar.png'  // Fixed extra space in the path
import arrow from '../../assets/arrow-forward.png';

const ProfileView = () => {
  return (
    <div className="profile-view">
      <img src={avatar} alt="User Avatar" className="profile-avatar" />
      <p className="profile-name">Muruts Yifter</p>
      
      {/* Removed extra div for better alignment */}
      <button className="logout-button">
        Logout
        <img src={arrow} alt="arrow-forward" className="arrow-forward" />
      </button>
    </div>
  );
};

export default ProfileView;
