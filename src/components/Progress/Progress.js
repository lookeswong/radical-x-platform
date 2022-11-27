import React from 'react'

import untickCircle1 from "../../images/untick-circle1.svg"; // circle with gray color
import untickCircle2 from "../../images/untick-circle2.svg"; // circle with black color

import './Progress.css';

export default function Progress(props) {

  const imageSource = props.isCurrent ? untickCircle2 : untickCircle1;
  const fontColor = props.isCurrent ? "#1e1e1e" : "#b1b4b7";

  const styles = {
    color: fontColor
  }

  return (
    <div className="container--progress">
      <img src={imageSource}/>
      <p style={styles}>{props.name}</p>
    </div>
  )
}

