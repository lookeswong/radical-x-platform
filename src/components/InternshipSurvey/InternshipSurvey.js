import React, {useState} from 'react';
import Card from '../Card/Card';
import Survey from '../CardDescriptions/Survey/Survey';

import './InternshipSurvey.css';

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
        {/* <Card name="Survey 1"/>
        <Card name="Survey 2"/> */}
      </div>
      <div className='survey-desc'>
        {hidden ? <Survey name={surveyNo}/> : null}
      </div>
    </div>
  )
}
