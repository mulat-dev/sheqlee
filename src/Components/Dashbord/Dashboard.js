// Dashboard.js

import React, { useState } from "react";
import JobPosts from "../JobPosts/JobPosts";
import "./Dashboard.css"; // Add your styling for tabs
import Companies from '../Companies/Companies'
import Freelancers from '../Freelancers/Freelancers';
import EmailAlerts from '../EmailAlerts/EmailAlerts';
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("jobPosts"); // Default tab

  const handleTabChange = (tab) => {
    setActiveTab(tab); // Change active tab on click
  };

  return (
    <div className="dashboard">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "jobPosts" ? "active" : ""}`}
          onClick={() => handleTabChange("jobPosts")}
        >
          Job Posts
        </button>
        <button
          className={`tab ${activeTab === "companies" ? "active" : ""}`}
          onClick={() => handleTabChange("companies")}
        >
          Companies
        </button>
        <button
          className={`tab ${activeTab === "freelancers" ? "active" : ""}`}
          onClick={() => handleTabChange("freelancers")}
        >
          Freelancers
        </button>
        <button
          className={`tab ${activeTab === "emailAlerts" ? "active" : ""}`}
          onClick={() => handleTabChange("emailAlerts")}
        >
          Email Alerts
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "jobPosts" && <JobPosts />} {/* Render JobPosts component when tab is active */}
        {activeTab === "companies" && <Companies />}
        {activeTab === "freelancers" && < Freelancers/>}
        {activeTab === "emailAlerts" && <EmailAlerts />}
      </div>
    </div>
  );
};

export default Dashboard;
