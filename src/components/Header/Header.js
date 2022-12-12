import React from "react";
import { Link } from "react-router-dom";

// import Button from "@mui/material/Button";

import leftArrow from "../../images/arrow-left.svg";
import rightArrow from "../../images/arrow-right.svg";

import "./Header.css";

export default function Header({page, handleNext, handlePrev, disableNext, disablePrev, nextHide, submitHide}) {
  return (
    <div className="container--header">
      {page > 0 ?
      <div className="back-button">
        <button type='button' onClick={handlePrev} disabled={disablePrev}>
          <img src={leftArrow} alt=""/>
          <p>Back</p>
        </button>
      </div> : 
      <Link to="/" style={{textDecoration: "none"}}>
        <div className="back-button">
          <button>
            <img src={leftArrow} alt=""/>
            <p>Back</p>
          </button>
        </div>
      </Link> 
      }
      <h2>Add New Internship</h2>
      <div className="right-button">
        <button type='button' onClick={handleNext} className={`continue-button ${nextHide}`} disabled={disableNext}>
          <p>Continue to Next Step</p>
          <img src={rightArrow}/>
        </button>
        <button type='submit' className={`continue-button ${submitHide}`} >
          <p>Publish Internship</p>
          <img src={rightArrow}/>
        </button>
      </div>
    </div>
  )
}