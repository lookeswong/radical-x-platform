import React from 'react';
import Card from '../Card/Card';
import Setting from '../CardDescriptions/Setting/Setting';

import './InternshipSetting.css';

export default function InternshipSetting() {
  return (
    <div className='container--internship-setting'>
      <div>
        {/* {SurveyObjectKeys.map((itemKey) => (
          <Card 
            key={itemKey}
            name={surveyObjects[itemKey].name}
            onClick={() => handleClick(itemKey)}
          />
        ))} */}
        <Card name="Basic Setting"/>
        <Card name="Hero Image"/>
      </div>
      <div className='setting-desc'>
        {/* {hidden ? <Survey name={surveyNo}/> : null} */}
        <Setting name="Internship URL"/>
      </div>
    </div>
  )
}
