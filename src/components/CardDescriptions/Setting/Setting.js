import React from 'react';

import './Setting.css';

export default function Setting({name}) {
  return (
    <div className='container--setting'>
      <p>Internship URL</p>
      <form className='category-form'>
        <input type="text" placeholder='radicalx-internship-url'/>
      </form>
      <p>Access</p>
      <form className=''>
        <input type="radio" name="intern_type" id='private' value="Private"/>
        <label for="private">Private Internship</label><br/>
        <input type="radio" name="intern_type" id='hidden' value="Hidden"/>
        <label for="hidden">Hidden Internship</label>
      </form>
      <p>Security</p>
      <form className=''>
        <input type="checkbox" id='disable' value="Disable"/>
        <label for="disable">Disable</label><br/>
      </form>
    </div>
  )
}
