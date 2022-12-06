import React from 'react';

import './Survey.css';
import addIcon from '../../../images/add-square-light-purple.svg';

export default function SurveyDescription({name}) {
  

  return (
    <div className='container--survey'>
      <p>{name}</p>
      <form className='category-form'>
        <input type="text" placeholder='Question'/>
      </form>
      <button>
        <img src={addIcon} alt=""/>
        <p>Add Question</p>
      </button>
    </div>
  )
}
