import React from "react";
import Progress from "../Progress/Progress";

import './ProgressBar.css';

export default function ProgressBar() {
  return (
    <div className="container--progress-bar">
      <Progress name="Internship Description" isCurrent={true}/>
      <Progress name="Internship Guide" isCurrent={false}/>
      <Progress name="Surveys" isCurrent={false}/>
      <Progress name="Settings" isCurrent={false}/>
    </div>
  )
}