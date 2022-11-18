import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Insights from "../components/Insights/Insights";

import addSquare from "../images/add-square.svg";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="container--dashboard">
      <Sidebar />
      <div className="container--main-content">
        <div className="header">
          <h2>Internships</h2>
          <button className="internship-create-button">
            <img src={addSquare} alt="square logo"/>
            Create a new Internship
          </button>
        </div>
        {/* Insights component here */}
        <Insights />
        {/* Internship list component here */}
      </div>
    </div>
  )
}