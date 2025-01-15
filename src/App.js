import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashbord/Dashboard';
import JobPosts from './Components/Jobpost/JobPosts';
import Subscribers from "./Components/Subscribers/Subscribers";   // Import the Subscribers component
import ProtectedRoute from "./Components/ProtectedRoute/ProtecetdRoute";
import LoginPage from './Components/LoginPage';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

    // Function to update authentication after login
    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <div style={{ display: 'flex' }}>
                {/* Only show sidebar if authenticated */}
                {isAuthenticated && <Sidebar />}
                <main style={{ marginLeft: isAuthenticated ? '250px' : '0px', padding: '20px', width: '100%' }}>
                    <Routes>
                        {/* Default Route Redirects to Login if not authenticated */}
                        <Route
                            path="/"
                            element={
                                isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />
                            }
                        />

                        {/* Protected Dashboard Route */}
                        <Route
                            path="/dashboard"
                            element={<ProtectedRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />}
                        />

                        {/* Protected JobPosts Route */}
                        <Route
                            path="/job-posts"
                            element={<ProtectedRoute element={<JobPosts />} isAuthenticated={isAuthenticated} />}
                        />

                        {/* Protected Subscribers Route */}
                        <Route
                            path="/subscribers"
                            element={<ProtectedRoute element={<Subscribers />} isAuthenticated={isAuthenticated} />}
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
