import React from "react";
import { NavLink } from "react-router-dom";
import dashboardIcon from "../../assets/dashboard.png";
import jobPostsIcon from "../../assets/job-posts.png";
import companiesIcon from "../../assets/companies.png";
import freelancersIcon from "../../assets/freelancers.png";
import categoriesIcon from "../../assets/categories.png";
import tagsIcon from "../../assets/tags.png";
import subscribersIcon from "../../assets/subscribers.png";
import systemConfigIcon from "../../assets/system-config.png";
import usersIcon from "../../assets/users.png";
import "./LinkList.css";

const LinkList = ({ activeLink, onLinkClick }) => {
  const links = [
    { icon: dashboardIcon, label: "Dashboard", name: "dashboard", to: "/dashboard" },
    { icon: jobPostsIcon, label: "Job Posts", name: "jobPosts", to: "/job-posts" },
    { icon: companiesIcon, label: "Companies", name: "companies", to: "/companies" },
    { icon: freelancersIcon, label: "Freelancers", name: "freelancers", to: "/freelancers" },
    { icon: categoriesIcon, label: "Categories", name: "categories", to: "/categories" },
    { icon: tagsIcon, label: "Tags", name: "tags", to: "/tags" },
    { icon: subscribersIcon, label: "Subscribers", name: "subscribers", to: "/subscribers" },
    { icon: systemConfigIcon, label: "System Config", name: "systemConfig", to: "/system-config" },
    { icon: usersIcon, label: "Users", name: "users", to: "/users" },
  ];

  return (
    <ul className="link-list">
      {links.map((link) => (
        <li key={link.name} className={`link-item ${activeLink === link.name ? "active" : ""}`}>
          <NavLink to={link.to} className="link" onClick={() => onLinkClick(link.name)}>
            <img src={link.icon} alt={`${link.label} icon`} className="link-icon" />
            <span className="link-label">{link.label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
