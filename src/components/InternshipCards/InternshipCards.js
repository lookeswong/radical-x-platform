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
      isSelected: true,
    },
    {
      name: "Location",
      isSelected: true,
    },
    {
      name: "Benefits",
      isSelected: true,
    },
    {
      name: "Intro Video",
      isSelected: true,
    },
    {
      name: "Mentor Details",
      isSelected: true,
    },
    {
      name: "Recommended Roles",
      isSelected: true,
    },
    {
      name: "Web Links & Resources",
      isSelected: true,
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
