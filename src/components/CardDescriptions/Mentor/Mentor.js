import React from 'react';
import useFormContext from "../../../hooks/useFormContext";

import './Mentor.css';
import imageIcon from '../../../images/image.svg';
import profileIcon from '../../../images/profile.svg';
import emailIcon from '../../../images/sms.svg';
import linkIcon from '../../../images/link-purple.svg';

export default function Mentor() {
  const { data, handleChange } = useFormContext();

  return (
    <div className="container--mentor">
      <p>Mentor Details</p>
      <div className='mentor-img'>
        <div className='container--image-icon'>
          <img src={imageIcon} alt=""/>
        </div>
      </div>
      <div className='mentor-form'>
        <div className='mentor-form-upper'>
          <div className='name-input'>
            <img src={profileIcon} alt=""/>
            <input type="text" placeholder='Name' id='descMentorName' name='descMentorName' value={data.descMentorName} onChange={handleChange}/>
          </div>
          <div className='email-input'>
            <img src={emailIcon} alt=""/>
            <input type="text" placeholder='Email address' id='descMentorEmail' name='descMentorEmail' value={data.descMentorEmail} onChange={handleChange}/>
          </div>
        </div>
        <div className='linkedin-input'>
          <img src={linkIcon} alt=""/>
          <input type="text" placeholder='LinkedIn URL (optional)' id='descMentorLinkedIn' name='descMentorLinkedIn' value={data.descMentorLinkedIn} onChange={handleChange}/>
        </div>
      </div>
    </div>
    // <div>
    //   {!isHidden && 
    //   <div className="container--mentor">
    //     <p>Mentor Details</p>
    //     <div className='mentor-img'>
    //       <div className='container--image-icon'>
    //         <img src={imageIcon} alt=""/>
    //       </div>
    //     </div>
    //     <form className='mentor-form'>
    //       <div className='mentor-form-upper'>
    //         {/* Old code */}
    //         {/* <img src={profileIcon} alt=""/>
    //         <input type="text" placeholder='Name'/>
    //         <img src={emailIcon} alt=""/>
    //         <input type="text" placeholder='Email address'/> */}
    //         <div className='name-input'>
    //           <img src={profileIcon} alt=""/>
    //           <input type="text" placeholder='Name'/>
    //         </div>
    //         <div className='email-input'>
    //           <img src={emailIcon} alt=""/>
    //           <input type="text" placeholder='Email address'/>
    //         </div>
    //       </div>
    //       <div className='linkedin-input'>
    //         <img src={linkIcon} alt=""/>
    //         <input type="text" placeholder='LinkedIn URL (optional)'/>
    //       </div>
    //     </form>
    //   </div>}
    // </div>
  )
}
