import React from 'react';
import useFormContext from "../../../hooks/useFormContext";

import './Category.css';

import searchButton from '../../../images/search-normal.svg';

export default function Category() {
  const { data, handleChange } = useFormContext();

  return (
    <div className="container--category">
      <p>Category</p>
      <div className='category-form'>
        <input type="text" placeholder='Search Category' id='descCategory' name='descCategory' value={data.descCategory} onChange={handleChange}/>
        <img src={searchButton} alt=""/>
      </div>
    </div>
    // <div >
    //   {!isHidden && 
    //   <div className="container--category">
    //     <p>Category</p>
    //     <form className='category-form'>
    //       <input type="text" placeholder='Search Category'/>
    //       <img src={searchButton} alt=""/>
    //     </form>
    //   </div>}

      
    //   {/* <p>Category</p>
    //   <form className='category-form'>
    //     <input type="text" placeholder='Search Category'/>
    //     <img src={searchButton} alt=""/>
    //   </form> */}
    // </div>
  )
}
