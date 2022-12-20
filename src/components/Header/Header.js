import React from "react";
import { Link } from "react-router-dom";

// import Button from "@mui/material/Button";

import leftArrow from "../../images/arrow-left.svg";
import rightArrow from "../../images/arrow-right.svg";
import rightArrowWhite from "../../images/arrow-right-white.svg";
import "./Header.css";

export default function Header({page, handleNext, handlePrev, disableNext, disablePrev, nextHide, submitHide, canSubmit}) {

  const buttonStyle = disableNext ? 'continue-button' : 'continue-success';
  const arrowStyle = disableNext ? rightArrow : rightArrowWhite;
  const submitButtonStyle = canSubmit ? 'continue-success' : 'continue-button';
  const submitArrowStyle = canSubmit ? rightArrowWhite : rightArrow;

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
        <button 
          type='button' 
          className={`${buttonStyle} ${nextHide}`} 
          onClick={handleNext} 
          disabled={disableNext}
        >
          <p>Continue to Next Step</p>
          <img src={arrowStyle}/>
        </button>
        <button type='submit' className={`${submitButtonStyle} ${submitHide}`} disabled={!canSubmit}>
          <p>Publish Internship</p>
          <img src={submitArrowStyle}/>
        </button>
      </div>
    </div>
  )
}