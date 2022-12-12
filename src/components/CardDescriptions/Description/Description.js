import React from 'react';

import './Description.css';

export default function Description() {
  return (
    // <div>
    //   {!isHidden &&
    //     <div className='container--description'>
    //       <p>Description</p>
    //       <form className='description-form'>
    //         <textarea placeholder='Description'/>
    //       </form>
    //     </div>
    //   }
    // </div>
    <div className='container--description'>
      <p>Description</p>
      <div className='description-form'>
        <textarea placeholder='Description'/>
      </div>
    </div>
  )
}
