import React from "react";
// import Button from "@mui/material/Button";

import leftArrow from "../../images/arrow-left.svg";
import rightArrow from "../../images/arrow-right.svg";

import "./Header.css";

export default function Header() {
  return (
    <div className="container--header">
      <div className="back-button">
        <button>
          <img src={leftArrow} alt=""/>
          <p>Back</p>
        </button>
      </div>
      <h2>Add New Internship</h2>
      <div className="continue-button">
        <button>
          <p>Continue to Next Step</p>
          <img src={rightArrow}/>
        </button>
      </div>
    </div>
  )
}