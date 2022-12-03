import React from 'react'

import './Benefits.css';

export default function Benefits() {
  return (
    // <div>
    //   {!isHidden &&
    //     <div className='container--benefits'>
    //       <p>Benefits</p>
    //       <form className='benefits-form'>
    //         <textarea placeholder='Description'/>
    //       </form>
    //     </div>
    //   }
    // </div>
    <div className='container--benefits'>
      <p>Benefits</p>
      <form className='benefits-form'>
        <textarea placeholder='Description'/>
      </form>
    </div>
  )
}
