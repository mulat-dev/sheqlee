import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // React Icons for visibility toggle
import "./Styles/LoginPage.css";
import logo from "../assets/logo.png";

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const isFormValid = email.trim() !== "" && password.trim() !== "";

    const handleLogin = (e) => {
        e.preventDefault();
        if (isFormValid) {
            alert("Login successful!");
            onLogin(); // Call the passed prop to update state in App.js
            navigate("/dashboard");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="login-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="header">CONTROL BOARD</h1>
            <form className="login-form" onSubmit={handleLogin}>
    <h2 className="form-title">Log in</h2>
    <div className="input-group">
        <input
            type="email"
            placeholder="   Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
    </div>
    <div className="input-group password-group">
        <input
            type={showPassword ? "text" : "password"}
            placeholder="   Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
        >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
    </div>
    <div>
    <button
        type="submit"
        className={`submit-button ${isFormValid ? "active" : ""}`}
        disabled={!isFormValid}
    >
        Log in

    </button>
        <p className="forgot-password">
        Forgot password? {''}
            <a href="/forgot-password">Reset</a>
        </p>
        </div>
        <div className="new-user">
        <p className="new-user">
            First time logging in? Click <a href="/activate">here</a>{''} to activate your account.
        </p>
        </div>
</form>

        </div>
    );
};

export default LoginPage;
