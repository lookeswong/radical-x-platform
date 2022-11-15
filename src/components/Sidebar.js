import React from "react";
import "./Sidebar.css";

// Images imports
import radicalXLogo from "../images/radicalX-logo.png";
import book from "../images/book.svg"; 
import dashboard from "../images/dashboard-3.svg";
import briefcase from "../images/briefcase.svg";
import medalStar from "../images/medal-star.svg";
import setting from "../images/setting-2.svg";
import rectangleAvatar from "../images/rectangle-avatar.svg";

export default function Sidebar() {
  return (
    <div>
      <div className="container--sidebar">
        <div className="container--sidebar-nav">
          <img className="sidebar-logo" src={radicalXLogo} alt="radicalX logo"/> 
          {/* Nav link here */}
          <div className="nav-link">
            <img className="nav-icon" src={dashboard} alt="dashboard logo"/>
            <p className="nav-text">Dashboard</p>
          </div>
          <div className="nav-link">
            <img className="nav-icon" src={medalStar} alt="medalStar logo"/>
            <p className="nav-text">Apprenterships</p>
          </div>
          <div className="nav-link selected">
            <img className="nav-icon" src={book} alt="book logo"/>
            <p className="nav-text">Internships</p>
          </div>
          <div className="nav-link">
            <img className="nav-icon" src={briefcase} alt="briefcase logo"/>
            <p className="nav-text">Jobs</p>
          </div>
          <div className="nav-link">
            <img className="nav-icon" src={setting} alt="setting logo"/>
            <p className="nav-text">Settings</p>
          </div>
        </div>
        <div className="container--sidebar-footer">
          <img className="footer-avatar" src={rectangleAvatar} alt="user pic"/>
          <p className="footer-text">Adam Scott</p>
        </div>
      </div>
    </div>
  )
}