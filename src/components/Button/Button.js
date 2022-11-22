import React, { useState } from "react";

import './Button.css';

export default function Button(props) {
  
  const buttonsElements = props.buttons.map(button => (
    <div className="btn-element" key={button.id} >
      <div 
        className={button.id === props.currentId ? "selectedButton" : "notSelected"} 
        onClick={() => props.onClick(button.id)}
      >
        <p className="button-text">{button.name}</p>
      </div>
    </div>
  ))

  return (
    <div className="header-btn">
      {buttonsElements}
    </div>
  )

}