import React, { useState } from 'react';
import './PasswordReset.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../assets/sidebar.png';
const PasswordReset = () => {
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = (field) => {
        if (field === 'password') {
            setShowPassword(!showPassword);
        } else if (field === 'confirmPassword') {
            setShowConfirmPassword(!showConfirmPassword);
        }
    };

    const handleSave = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        alert('Password successfully reset!');
        // Backend API call goes here
    };

    return (
        <div className="password-reset-container">
            <div className="logo">
                <img src={logo} alt="Control Board Logo" />
            </div>
            <div className="header"><h2>CONTROL BOARD</h2></div>
            <div className="input-section">
                {/* Left Section */}
                <div className="code-section">
                    <h4 className="enter-code">Enter Code</h4>
                    <p className='message'>We've sent a reset code to your email. Please enter the code below.</p>
                    <input
                        type="text"
                        placeholder="   Enter code..."
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </div>

                {/* Right Section */}
                <div className="password-section">
                    <h4 className='new-label'>New password</h4>
                    <div className="password-input-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="   Password..."
                            value={password.replace(/./g,'*')}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="password-icon"
                            onClick={() => togglePasswordVisibility('password')}
                        >
                            {!showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    <div className="password-input-container">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="   Confirm  password..."
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {/* <span
                            className="password-icon"
                            onClick={() => togglePasswordVisibility('confirmPassword')}
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span> */}
                    </div>
                </div>
            </div>

            <button className="save-button"  onClick={handleSave}>Save</button>
        </div>
    );
};

export default PasswordReset;
