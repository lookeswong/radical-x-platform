import React, { useState} from 'react';

import searchButton from '../../images/search-normal.svg';

export default function CardDesc({title, isHidden, handleClick}) {

  return (
    <div >
      {/* {!isHidden && 
      <div className="container--category">
        <p>Category</p>
        <form className='category-form'>
          <input type="text" placeholder='Search Category'/>
          <img src={searchButton} alt=""/>
        </form>
      </div>} */}
      {isHidden ? null : 
        <div onClick={handleClick}>
          <p>{title}</p>
          <form className='category-form'>
            <input type="text" placeholder='Search Category'/>
            <img src={searchButton} alt=""/>
          </form>
        </div>
      }
    </div>
  )
}