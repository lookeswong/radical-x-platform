import React, {useState } from 'react';
import Card from '../Card/Card';

// Hidden components
import Category from '../CardDescriptions/Category/Category';
import Description from '../CardDescriptions/Description/Description';
import Location from '../CardDescriptions/Locations/Location';
import Benefits from '../CardDescriptions/Benefits/Benefits';
import Roles from '../CardDescriptions/Roles/Roles';
import WebLinks from '../CardDescriptions/WebLinks/WebLinks';
import IntroVideo from '../CardDescriptions/IntroVideo/IntroVideo';
import Mentor from '../CardDescriptions/Mentor/Mentor';

// css and images imports
import './InternshipCards.css';
import addSquare from '../../images/add-square-purple.svg';

export default function InternshipCards() {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(prevState => !prevState)
    console.log("Change State")
  }

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

  // function to add more description card - implement it later
  // const addDescription = (name, isSelected) => {
  //   setInternshipDescriptions(prevState => {
  //     return [...prevState, {name, isSelected}]
  //   })
  // }

  // create a list of card component
  // const internshipElements = internshipDescriptions.map(internship => (
  //   <Card name={internship.name} isSelected={internship.isSelected}/>
  // ))


  return (
    <div className='container--internship-description'>
      <div>
        {/* Old code that render a list of card components */}
        {/* {internshipElements}  */}
        <Card name="Category" onClick={handleClick}/>
        <Card name="Description" onClick={handleClick}/>
        <Card name="Location" onClick={handleClick}/>
        <Card name="Benefits" onClick={handleClick}/>
        <Card name="Intro Video" onClick={handleClick}/>
        <Card name="Mentor Details" onClick={handleClick}/>
        <Card name="Recommended Roles" onClick={handleClick}/>
        <Card name="Web Links & Resources" onClick={handleClick}/>
        {/* Add-More button*/}
        <button className='add-internship-button'>
          <img src={addSquare} alt=""/>
          Add More
        </button>
      </div>
      <div>
        <Category isHidden={hidden}/>
        <Description isHidden={hidden}/>
        <Location isHidden={hidden}/>
        <Benefits isHidden={hidden}/>
        <IntroVideo isHidden={hidden}/>
        <Mentor isHidden={hidden}/>
        <Roles isHidden={hidden}/>
        <WebLinks isHidden={hidden}/>
      </div>
    </div>
  )
}
