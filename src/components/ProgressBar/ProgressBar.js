import React from "react";
import Progress from "../Progress/Progress";

import './ProgressBar.css';

export default function ProgressBar({page, title}) {

  const currentPage = title[page];

  return (
    <div className="container--progress-bar">
      {Object.keys(title).map((step, i) => (
        <Progress key={i} name={title[step]} isCurrent={currentPage} current={i} page={page}/>
      ))}
    </div>
  )
}