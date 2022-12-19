import React from 'react';
import useFormContext from "../../../hooks/useFormContext";

import './Benefits.css';

export default function Benefits() {
  const { data, handleChange } = useFormContext();

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
      <div className='benefits-form'>
        <textarea placeholder='Description' id='descBenefits' name='descBenefits' value={data.descBenefits} onChange={handleChange}/>
      </div>
    </div>
  )
}
