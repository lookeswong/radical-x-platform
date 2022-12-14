import React from 'react';
import useFormContext from "../../../hooks/useFormContext";

import './Survey.css';
import addIcon from '../../../images/add-square-light-purple.svg';

export default function SurveyDescription({name, surveyQuestionNo, formData}) {
  const { handleChange } = useFormContext();

  return (
    <div className='container--survey'>
      <p>{name}</p>
      <div className='category-form'>
        <input type="text" placeholder='Question' id={`surSurvey${surveyQuestionNo}`} name={`surSurvey${surveyQuestionNo}`} value={formData} onChange={handleChange}/>
      </div>
      <button type='button'>
        <img src={addIcon} alt=""/>
        <p>Add Question</p>
      </button>
    </div>
  )
}
