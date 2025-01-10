import React, { useState } from "react";
import "./Sidebar.css";
import LinkList from "./LinkList";
import ProfileView from "./ProfileView";
import Logo from "./Logo";

const Sidebar = () => {
  // State to track active link
  const [activeLink, setActiveLink] = useState("dashboard");

  // Function to handle link click
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Update active link
  };

  return (
    <aside className="sidebar">
        <Logo />
      <ProfileView />
      <ul className="sidebar-links">
        <LinkList activeLink={activeLink} onLinkClick={handleLinkClick} />
      </ul>
    </aside>
  );
};

export default Sidebar;
