import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './Styles/LoginPage.css';
import logo from "../assets/sidebar.png"; // Your logo file

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Check if the form is valid
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="login-container">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Header */}
      <h1 className="header">CONTROL BOARD</h1>

      {/* Login Form */}
      <form className="login-form">
        <h2 className="form-title">Log in</h2>

        {/* Email Input */}
        <div className="input-group">
          <input
            type="email"
            placeholder="     Email ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="input-group password-group">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="     Password ..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Submit Button */}
        <div style={{ marginTop:'40px',display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '50px' }}>
        <button
          type="submit"
          className={`submit-button ${isFormValid ? "active" : ""}`}
          disabled={!isFormValid}
        >
          Log in
        </button>
        <p> Forgot password? <a href="/reset" className="link">Reset</a></p>
        
        </div>
        
      </form>

      {/* Links */}
      <div className="links">
       
        <p className="new-user">
          First time logging in? Click {" "}
          <a href="/activate" className="link">
            here
          </a>{" "}
to activate your account.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
