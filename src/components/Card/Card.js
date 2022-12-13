import React, { useEffect, useState } from 'react';
import useFormContext from '../../hooks/useFormContext';

import './Card.css';

import menuLogo from '../../images/menu.svg';
import rightArrow from '../../images/arrow-right-internship.svg';
import tickCircle from '../../images/tick-circle.svg';

export default function Card({name, onClick, formData}) {
  let isFilled;
  // check if its mentor details card
  if (name == 'Mentor Details') {
    isFilled = 'remove-tick'
    let [test1, test2, test3] = formData;
    if (test1 !== "" && test2 !== "" && test3 !== "") {
      isFilled = '';
    }
  } else {
    isFilled = formData ? null : 'remove-tick';
  }

  return (
    <div className='container--card'>
      <div className='card-image'>
        <img src={menuLogo} alt=""/>
      </div>
      {/* Old code */}
      <div className='card' onClick={onClick}>
        <div className='card-text' >
          <p>{name}</p>
          <div className={isFilled}>
            <img src={tickCircle} alt=''/>
          </div>
        </div>
        <img src={rightArrow} alt=""/>
      </div>
      {/* The code below highlight the border when we select a specific card */}
      {/* <div
        className={props.isSelected ? "selected-card" : "card-text"}
        onClick={() => <></>}
      >
        <p>{props.name}</p>
        <img src={rightArrow} alt=""/>
      </div> */}
    </div>
  )
}
