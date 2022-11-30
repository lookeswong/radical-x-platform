import React, { useState} from 'react';

import './Category.css';

import searchButton from '../../../images/search-normal.svg';

export default function Category({isHidden}) {

  return (
    <div >
      {!isHidden && 
      <div className="container--category">
        <p>Category</p>
        <form className='category-form'>
          <input type="text" placeholder='Search Category'/>
          <img src={searchButton} alt=""/>
        </form>
      </div>}

      
      {/* <p>Category</p>
      <form className='category-form'>
        <input type="text" placeholder='Search Category'/>
        <img src={searchButton} alt=""/>
      </form> */}
    </div>
  )
}
