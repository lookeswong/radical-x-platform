import React, { useState } from 'react';
import Card from '../Card/Card';
import Setting from '../CardDescriptions/Setting/Setting';
import useFormContext from "../../hooks/useFormContext";

import './InternshipSetting.css';

export default function InternshipSetting() {

  const [hidden, setHidden] = useState();

  const { data } = useFormContext();

  const settingObjects = {
    setting1: {
      name: "Basic Setting",
      formName: "settingBasic",
      formData: data.settingBasic,
    },
    setting2: {
      name: "Hero Image",
      formName: "settingHero",
      formData: data.settingHero,
    }
  };

  const handleClick = (setting) => {
    if (settingObjects[setting].name) {
      setHidden(setting);
    }
  };

  const SettingObjectKeys = Object.keys(settingObjects);

  const settingFormName = settingObjects[hidden] ? settingObjects[hidden].formName : null;
  const settingFormData = settingObjects[hidden] ? settingObjects[hidden].formData : null;
  const currentSelectedName = settingObjects[hidden] ? settingObjects[hidden].name : null;

  return (
    <div className='container--internship-setting'>
      <div>
        {SettingObjectKeys.map((itemKey) => (
          <Card 
            key={itemKey}
            name={settingObjects[itemKey].name}
            currentSelected={currentSelectedName}
            onClick={() => handleClick(itemKey)}
          />
        ))}
      </div>
      <div className='setting-desc'>
        {hidden ? <Setting formName={settingFormName} formData={settingFormData}/> : null}
      </div>
    </div>
  )
}
