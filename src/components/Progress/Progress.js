import React from 'react'

import untickCircle1 from "../../images/untick-circle1.svg"; // circle with gray color
import untickCircle2 from "../../images/untick-circle2.svg"; // circle with black color
import tickCircleIcon from "../../images/tick-circle-progress.svg"; // circle with purple
import './Progress.css';

export default function Progress({name, isCurrent, current, page}) {
  const circleTick = isCurrent == name ? untickCircle2 : untickCircle1;
  const fontColor = isCurrent === name ? "#1e1e1e" : "#b1b4b7";
  const isPageDone = page > current;

  const circleImg = isPageDone ? tickCircleIcon : circleTick
  const styles = isPageDone ? {
    color: '#793ef5'
  } : {
    color: fontColor
  }

  return (
    <div className="container--progress">
      <img src={circleImg}/>
      <p style={styles}>{name}</p>
    </div>
  )

  // const imageSource = isCurrent ? untickCircle2 : untickCircle1;
  // const fontColor = isCurrent ? "#1e1e1e" : "#b1b4b7";

  // const styles = {
  //   color: fontColor
  // }

  // return (
  //   <div className="container--progress">
  //     <img src={imageSource}/>
  //     <p style={styles}>{name}</p>
  //   </div>
  // )
}

