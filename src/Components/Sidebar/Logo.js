import React from "react";
import "./Logo.css";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
