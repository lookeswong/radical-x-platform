import React from "react";
import InternshipCards from "../InternshipCards/InternshipCards";
import InternshipGuide from "../InternshipGuide/InternshipGuide";
import InternshipSetting from  "../InternshipSetting/InternshipSetting";
import InternshipSurvey from "../InternshipSurvey/InternshipSurvey";
import useFormContext from "../../hooks/useFormContext";

import './FormInputs.css';

export default function FormInputs() {
  const { page } = useFormContext();

  const display = {
    0: <InternshipCards />,
    1: <InternshipGuide />,
    2: <InternshipSurvey />,
    3: <InternshipSetting />
  }

  return (
    <div className="form-inputs">
      {display[page]}
    </div>
  )
}
