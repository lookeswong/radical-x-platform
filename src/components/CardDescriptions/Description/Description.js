import React from 'react';

import './Description.css';

export default function Description({isHidden}) {
  return (
    <div>
      {!isHidden &&
        <div className='container--description'>
          <p>Description</p>
          <form className='description-form'>
            <textarea placeholder='Description'/>
          </form>
        </div>
      }
    </div>
  )
}
