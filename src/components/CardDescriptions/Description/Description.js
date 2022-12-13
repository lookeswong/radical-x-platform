import React from 'react';
import useFormContext from "../../../hooks/useFormContext";

import './Description.css';

export default function Description() {
  const { data, handleChange } = useFormContext();

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
        <textarea placeholder='Description' id='descDescription' name='descDescription' value={data.descDescription} onChange={handleChange}/>
      </div>
    </div>
  )
}
