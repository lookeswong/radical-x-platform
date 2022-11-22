import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Insights from "../components/Insights/Insights";
import InternshipList from "../components/InternshipList/InternshipList";

// images import
import addSquare from "../images/add-square.svg";
// import arrowDown from "../images/arrow-square-down.svg";
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
        <div className="container--internship-list">
          {/* OLD HEADER */}
          {/* <div className="list-header">
            <div className="title">
              <p>Internship Title</p>
              <img src={arrowDown} alt=""/>
            </div>
            <div className="completion">
              <p>Completion Period</p>
              <img src={arrowDown} alt=""/>
            </div>
            <div className="enrolled">
              <p>Total Enrolled</p>
              <img src={arrowDown} alt=""/>
            </div>
            <div className="candidates">
              <p>Qualified Candidates</p>
              <img src={arrowDown} alt=""/>
            </div>
            <div></div>
          </div> */}
          <div className="internship-list">
            <InternshipList />
          </div>
        </div>
      </div>
    </div>
  )
}