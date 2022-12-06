import React, { useState } from 'react';

import './Card.css';

import menuLogo from '../../images/menu.svg';
import rightArrow from '../../images/arrow-right-internship.svg';

export default function Card({name, onClick}) {

  return (
    <div className='container--card'>
      <div className='card-image'>
        <img src={menuLogo} alt=""/>
      </div>
      {/* Old code */}
      <div className='card-text' onClick={onClick}>
        <p>{name}</p>
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
