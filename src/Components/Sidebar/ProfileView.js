// Components/ProfileView/ProfileView.js
import React from "react";
import "./ProfileView.css";
import avatar from '../../assets/avatar.png';
import arrow from '../../assets/arrow-forward.png';
import { useNavigate } from "react-router-dom";

const ProfileView = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout(); // Call logout function from Sidebar
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="profile-view">
      <img src={avatar} alt="User Avatar" className="profile-avatar" />
      <p className="profile-name">Muruts Yifter</p>
      
      {/* Logout Button */}
      <button className="logout-button" onClick={handleLogoutClick}>
        Logout
        <img src={arrow} alt="arrow-forward" className="arrow-forward" />
      </button>
    </div>
  );
};

export default ProfileView;
