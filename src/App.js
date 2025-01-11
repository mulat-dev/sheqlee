// App.js
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from './Components/Dashbord/Dashboard';
import JobPosts from "./Components/JobPosts/JobPosts";
import Companies from './Components/Companies/Companies';
import Freelancers from './Components/Freelancers/Freelancers';
import EmailAlerts from './Components/EmailAlerts/EmailAlerts';

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ marginLeft: "300px", padding: "20px", width: "100%" }}>
          <Routes>
            {/* Dashboard route */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/job-posts" element={<JobPosts />} />
            <Route path="/dashboard/companies" element={<Companies />} />
            <Route path="/dashboard/freelancers" element={<Freelancers />} />
            <Route path="/dashboard/email-alerts" element={<EmailAlerts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
