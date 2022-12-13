import React from 'react';
import useFormContext from "../../../hooks/useFormContext";

import './Survey.css';
import addIcon from '../../../images/add-square-light-purple.svg';

export default function SurveyDescription({name}) {
  const { data, handleChange } = useFormContext();

  return (
    <div className='container--survey'>
      <p>{name}</p>
      <form className='category-form'>
        <input type="text" placeholder='Question' id='surSurvey' name='surSurvey' value={data.surSurvey} onChange={handleChange}/>
      </form>
      <button>
        <img src={addIcon} alt=""/>
        <p>Add Question</p>
      </button>
    </div>
  )
}
