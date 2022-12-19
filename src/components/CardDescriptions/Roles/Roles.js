import React from 'react';
import useFormContext from "../../../hooks/useFormContext";

import './Roles.css';
import searchButton from '../../../images/search-normal.svg';
import addIcon from '../../../images/add-square-light-purple.svg';
import linkIcon from '../../../images/link.svg';


export default function Roles() {
  const { data, handleChange } = useFormContext();

  return (
    <div className="container--roles">
      <p>Recommended Roles</p>
      <div className='roles-form'>
        <img src={linkIcon} alt="" className='link-icon'/>
        <input type="text" placeholder='Add URL' id='descRoles' name='descRoles' value={data.descRoles} onChange={handleChange}/>
        <img src={searchButton} alt="" className='search-icon'/>
      </div>
      <button type='button'>
        <img src={addIcon} alt=""/>
        <p>Add URL</p>
      </button>
    </div>
    // <div>
    //   {!isHidden && 
    //   <div className="container--roles">
    //     <p>Recommended Roles</p>
    //     <form className='roles-form'>
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
