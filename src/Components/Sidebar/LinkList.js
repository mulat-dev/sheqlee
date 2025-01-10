import React from "react";
import "./LinkList.css";

// Import icons from the assets folder
import dashboardIcon from "../../assets/dashboard.png";
import jobPostsIcon from "../../assets/job-posts.png";
import companiesIcon from "../../assets/companies.png";
import freelancersIcon from "../../assets/freelancers.png";
import categoriesIcon from "../../assets/categories.png";
import tagsIcon from "../../assets/tags.png";
import subscribersIcon from "../../assets/subscribers.png";
import systemConfigIcon from "../../assets/system-config.png";
import usersIcon from "../../assets/users.png";

const LinkList = ({ activeLink, onLinkClick }) => {
  const links = [
    { icon: dashboardIcon, label: "Dashboard", linkName: "dashboard" },
    { icon: jobPostsIcon, label: "Job Posts", linkName: "job-posts" },
    { icon: companiesIcon, label: "Companies", linkName: "companies" },
    { icon: freelancersIcon, label: "Freelancers", linkName: "freelancers" },
    { icon: categoriesIcon, label: "Categories", linkName: "categories" },
    { icon: tagsIcon, label: "Tags", linkName: "tags" },
    { icon: subscribersIcon, label: "Subscribers", linkName: "subscribers" },
    { icon: systemConfigIcon, label: "System Config", linkName: "system-config" },
    { icon: usersIcon, label: "Users", linkName: "users" },
  ];

  return (
    <ul className="link-list">
      {links.map((link, index) => (
        <li
          key={index}
          className={`link-item ${activeLink === link.linkName ? "active" : ""}`}
          onClick={() => onLinkClick(link.linkName)}
        >
          <img src={link.icon} alt={`${link.label} icon`} className="link-icon" />
          <span className="link-label">{link.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
