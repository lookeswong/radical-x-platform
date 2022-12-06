import React from 'react';

import './InnerCard.css';
import menuLogo from '../../images/menu2.svg';

export default function InnerCard({name}) {
  return (
    <div className='container--inner-card'>
      <div className='inner-card-text'>
        <img src={menuLogo}/>
        <p>{name}</p>
      </div>
    </div>
  )
}
