import React, { useState } from "react";
import CompaniesTab from "./CompaniesTab";
import CategoriesTab from "./CategoriesTab";
 import TagsTab from "./TagsTab";
import "./Subscribers.css"; // Add your styling for tabs

const Subscribers = () => {
  const [activeTab, setActiveTab] = useState("companies"); // Default tab

  const handleTabChange = (tab) => {
    setActiveTab(tab); // Change active tab on click
  };

  return (
    <div className="subscribers">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "companies" ? "active" : ""}`}
          onClick={() => handleTabChange("companies")}
        >
          Companies
        </button>
        <button
          className={`tab ${activeTab === "categories" ? "active" : ""}`}
          onClick={() => handleTabChange("categories")}
        >
          Categories
        </button>
        <button
          className={`tab ${activeTab === "tags" ? "active" : ""}`}
          onClick={() => handleTabChange("tags")}
        >
          Tags
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "companies" && <CompaniesTab />}
        {activeTab === "categories" && <CategoriesTab />}
        {activeTab === "tags" && <TagsTab />}
      
        </div>
    </div>
  );
};

export default Subscribers;
