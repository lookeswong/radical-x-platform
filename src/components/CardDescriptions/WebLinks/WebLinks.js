import React from 'react';

import './WebLinks.css';
import searchButton from '../../../images/search-normal.svg';
import addIcon from '../../../images/add-square-light-purple.svg';
import linkIcon from '../../../images/link.svg';

export default function WebLinks({isHidden}) {
  return (
    <div className="container--web-links">
      <p>Web Links & Resources</p>
      <div className='web-links-form'>
        <img src={linkIcon} alt="" className='link-icon'/>
        <input type="text" placeholder='Add URL'/>
        <img src={searchButton} alt="" className='search-icon'/>
      </div>
      <button>
        <img src={addIcon} alt=""/>
        <p>Add URL</p>
      </button>
    </div>
    // <div>
    //   {!isHidden && 
    //   <div className="container--web-links">
    //     <p>Web Links & Resources</p>
    //     <form className='web-links-form'>
    //       <img src={linkIcon} alt="" className='link-icon'/>
    //       <input type="text" placeholder='Add URL'/>
    //       <img src={searchButton} alt="" className='search-icon'/>
    //     </form>
    //     <button>
    //       <img src={addIcon} alt=""/>
    //       <p>Add URL</p>
    //     </button>
    //   </div>}
    // </div>
  )
}
