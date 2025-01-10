import React, { useState } from "react";
import "./ResetInitial.css";
import logo from '../assets/sidebar.png';

const ResetInitial = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email) {
      setError("Email is required.");
    } else if (!email.includes('@')) {
      setError("Email must include '@'.");
    } else {
      setError('');
      alert('Password reset code sent!'); // Replace with actual logic
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Control Board" className="icon" />
      <h1 className="title">CONTROL BOARD</h1>
      <p className="subtitle">Forgot password?</p>
      <p className="instruction">
        Please enter your email to get a password reset code.
      </p>
      <input
        type="email"
        placeholder="Your email..."
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Display error message */}
      {error && <p className="error-message">{error}</p>}
      <button className="reset-button" onClick={handleSubmit}>
        Reset
      </button>
    </div>
  );
};

export default ResetInitial;
