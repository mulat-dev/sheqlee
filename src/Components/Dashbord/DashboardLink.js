import React from "react";
import { Link } from "react-router-dom";

const DashboardLink = ({ isActive, onClick }) => {
  return (
    <li>
      <Link
        to="/dashboard"
        className={isActive ? "active" : ""}
        onClick={onClick}
      >
        Dashboard
      </Link>
    </li>
  );
};

export default DashboardLink;
