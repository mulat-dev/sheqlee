import React, { useState } from "react";
import "./Sidebar.css";
import LinkList from "./LinkList";
import ProfileView from "./ProfileView";
import Logo from "./Logo";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("dashboard"); // Default active link

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Update active link on click
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
