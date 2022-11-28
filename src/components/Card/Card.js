import React from 'react';

import './Card.css';

import menuLogo from '../../images/menu.svg';
import rightArrow from '../../images/arrow-right-internship.svg';

export default function Card(props) {
  return (
    <div className='container--card'>
      <div className='card-image'>
        <img src={menuLogo} alt=""/>
      </div>
      <div className='card-text'>
        <p>{props.name}</p>
        <img src={rightArrow} alt=""/>
      </div>
    </div>
  )
}
