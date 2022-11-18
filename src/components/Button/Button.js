import React from "react";

export default function Button(props) {
  const styles = {
    backgroundColor: props.isSelected ? "#793ef5" : "#ffffff",
    color: props.isSelected ? "#ffffff" : "#1e1e1e"
  }

  return (
    <span 
      style={styles} 
      onClick={props.handleClick}
    >
      {props.name}
    </span>
  )
}