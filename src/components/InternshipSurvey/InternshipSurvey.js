import React, {useState} from 'react';
import Card from '../Card/Card';
import Survey from '../CardDescriptions/Survey/Survey';

import './InternshipSurvey.css';
import addItemIcon from '../../images/additem.svg';

export default function InternshipSurvey() {
  const [hidden, setHidden] = useState();

  const surveyObjects = {
    survey1: {
      name: "Survey 1",
    },
    survey2: {
      name: "Survey 2",
    }
  };

  const handleClick = (num) => {
    if (surveyObjects[num].name) {
      setHidden(num);
    }
  };

  const SurveyObjectKeys = Object.keys(surveyObjects);

  const surveyNo = surveyObjects[hidden] ? surveyObjects[hidden].name : null;

  return (
    <div className='container--internship-survey'>
      <div>
        {SurveyObjectKeys.map((itemKey) => (
          <Card 
            key={itemKey}
            name={surveyObjects[itemKey].name}
            onClick={() => handleClick(itemKey)}
          />
        ))}
        <button type="button" className='add-survey-button'>
          <img src={addItemIcon} alt=''/>
          Add Survey
        </button>
        {/* <Card name="Survey 1"/>
        <Card name="Survey 2"/> */}
      </div>
      <div className='survey-desc'>
        {hidden ? <Survey name={surveyNo}/> : null}
      </div>
    </div>
  )
}
