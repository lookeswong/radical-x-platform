import React from 'react';
import useFormContext from "../../../hooks/useFormContext";

import './Location.css';
import locationIcon from '../../../images/location.svg';
import arrowDownIcon from '../../../images/arrow-down.svg';

export default function Location() {
  const { data, handleChange } = useFormContext();

  return (
    <div className="container--location">
      <p>Location</p>
      <div className='location-form'>
        <img src={locationIcon} alt="" className="location-icon"/>
        <select id='descLocation' name='descLocation' value={data.descLocation} onChange={handleChange}>
          <option value="" selected disale hidden>Select Location</option>
          <option value="new-york">New York</option>
          <option value="london">London</option>
          <option value="kuala-lumpur">Kuala Lumpur</option>
          <option value="singapore">Singapore</option>
          <option value="seattle">Seattle</option>
          <option value="boston">Boston</option>
          <option value="chicago">Chicago</option>
        </select>
        <img src={arrowDownIcon} alt="" className='arrow-icon'/>
      </div>
    </div>
    // <div >
    //   {!isHidden && 
    //   <div className="container--location">
    //     <p>Location</p>
    //     <form className='location-form'>
    //       <img src={locationIcon} alt="" className="location-icon"/>
    //       <select>
    //         <option value="" selected disale hidden>Select Location</option>
    //         <option value="new-york">New York</option>
    //         <option value="london">London</option>
    //         <option value="kuala-lumpur">Kuala Lumpur</option>
    //         <option value="singapore">Singapore</option>
    //         <option value="seattle">Seattle</option>
    //         <option value="boston">Boston</option>
    //         <option value="chicago">Chicago</option>
    //       </select>
    //       <img src={arrowDownIcon} alt="" className='arrow-icon'/>
    //     </form>
    //   </div>}
    // </div>
  )
}
