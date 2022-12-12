import React from 'react';

import './Setting.css';

export default function Setting({name}) {
  return (
    <div className='container--setting'>
      <p>Internship URL</p>
      <div className='category-form'>
        <input type="text" placeholder='radicalx-internship-url'/>
      </div>
      <p>Access</p>
      <div className=''>
        <label for="private" className='container'>Private Internship
          <input type="radio" name="intern_type" id='private' value="Private"/>
          <span className='checkmark'></span>
        </label>
        <label for="hidden" className='container'>Hidden Internship
          <input type="radio" name="intern_type" id='hidden' value="Hidden"/>
          <span className='checkmark'></span>
        </label>
      </div>
      <p>Security</p>
      <div className=''>
        <label for="disable" className='container'>Disable
          <input type="checkbox" id='disable' value="Disable"/>
          <span className='checkmark'></span>
        </label>
      </div>
    </div>
  )
}
