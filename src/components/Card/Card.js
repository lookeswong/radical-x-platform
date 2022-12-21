import React from 'react';

import './Card.css';

import menuLogo from '../../images/menu.svg';
import rightArrow from '../../images/arrow-right-internship.svg';
import rightArrowPurple from '../../images/arrow-right-purple.svg';
import tickCircle from '../../images/tick-circle.svg';

export default function Card({name, onClick, formData, currentSelected}) {

  const selectedCard = currentSelected === name ? 'active-card' : 'card';
  const selectedArrow = currentSelected === name ? rightArrowPurple : rightArrow;

  let isFilled;
  // check if its mentor details card
  if (name === 'Mentor Details') {
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
      <div className={`${selectedCard}`} onClick={onClick}>
        <div className='card-text' >
          <p>{name}</p>
          <div className={isFilled}>
            <img src={tickCircle} alt=''/>
          </div>
        </div>
        <img src={selectedArrow} alt=""/>
      </div>
    </div>
  )
}
