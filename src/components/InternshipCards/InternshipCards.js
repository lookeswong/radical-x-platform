import React, { useState } from 'react';
import Card from '../Card/Card';

import './InternshipCards.css';

import addSquare from '../../images/add-square-purple.svg';

export default function InternshipCards() {
  // prev use state for internships
  // const [internshipDescriptions, setInternshipDescriptions] = useState([
  //   "Category", "Description", "Location", "Benefits", "Intro Video", "Mentor Details", "Recommended Roles", "Web Links & Resources"
  // ])

  // Mock data objects
  const [internshipDescriptions, setInternshipDescriptions] = useState([
    {
      name: "Category",
      isSelected: true,
      // isDone: false
    },
    {
      name: "Description",
      isSelected: false,
    },
    {
      name: "Location",
      isSelected: false,
    },
    {
      name: "Benefits",
      isSelected: false,
    },
    {
      name: "Intro Video",
      isSelected: false,
    },
    {
      name: "Mentor Details",
      isSelected: false,
    },
    {
      name: "Recommended Roles",
      isSelected: false,
    },
    {
      name: "Web Links & Resources",
      isSelected: false,
    },
  ])

  const internshipElements = internshipDescriptions.map(internship => (
    <Card name={internship.name} isSelected={internship.isSelected}/>
  ))


  return (
    <div className='container--internship-description'>
      <div>
        {/* <Card name="Category"/> */}
        {internshipElements}
        {/* Add-More button here */}
        <button className='add-internship-button'>
          <img src={addSquare} alt=""/>
          Add More
        </button>
      </div>
    </div>
  )
}
