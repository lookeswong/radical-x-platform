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
  // old code that works
  // const [hidden, setHidden] = useState(true);

  // NEW - implementing hidden seperately
  const [categoryHidden, setCategoryHidden] = useState(true);
  const [descHidden, setDescHidden] = useState(true);
  const [locationHidden, setLocationHidden] = useState(true);
  const [benefitsHidden, setBenefitsHidden] = useState(true);
  const [introVidHidden, setIntroVidHidden] = useState(true);
  const [mentorHidden, setMentorHidden] = useState(true);
  const [rolesHidden, setRolesHidden] = useState(true);
  const [webLinkHidden, setWebLinkHidden] = useState(true);

  const handleClick = (cardDescFunc) => {
    // prevFunc(prevState => !prevState)
    cardDescFunc(prevState => {
      console.log(prevState)
      return !prevState
    });
    // prevFunc = cardDescFunc()
  }

  // // Mock data objects
  // const [internshipDescriptions, setInternshipDescriptions] = useState([
  //   {
  //     name: "Category",
  //     isSelected: true,
  //     // isDone: false
  //   },
  //   {
  //     name: "Description",
  //     isSelected: false,
  //   },
  //   {
  //     name: "Location",
  //     isSelected: false,
  //   },
  //   {
  //     name: "Benefits",
  //     isSelected: false,
  //   },
  //   {
  //     name: "Intro Video",
  //     isSelected: false,
  //   },
  //   {
  //     name: "Mentor Details",
  //     isSelected: false,
  //   },
  //   {
  //     name: "Recommended Roles",
  //     isSelected: false,
  //   },
  //   {
  //     name: "Web Links & Resources",
  //     isSelected: false,
  //   },
  // ])

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
    // Old code that works!
    <div className='container--internship-description'>
      <div>
        {/* Old code that render a list of card components */}
        {/* {internshipElements}  */}
        {/* <Card name="Category" onClick={handleClick}/>
        <Card name="Description" onClick={handleClick}/>
        <Card name="Location" onClick={handleClick}/>
        <Card name="Benefits" onClick={handleClick}/>
        <Card name="Intro Video" onClick={handleClick}/>
        <Card name="Mentor Details" onClick={handleClick}/>
        <Card name="Recommended Roles" onClick={handleClick}/>
        <Card name="Web Links & Resources" onClick={handleClick}/> */}

        {/* Trying new stuff */}
        <Card name="Category" onClick={() => handleClick(setCategoryHidden)}/>
        <Card name="Description" onClick={() => handleClick(setDescHidden)}/>
        <Card name="Location" onClick={() => handleClick(setLocationHidden)}/>
        <Card name="Benefits" onClick={() => handleClick(setBenefitsHidden)}/>
        <Card name="Intro Video" onClick={() => handleClick(setIntroVidHidden)}/>
        <Card name="Mentor Details" onClick={() => handleClick(setMentorHidden)}/>
        <Card name="Recommended Roles" onClick={() => handleClick(setRolesHidden)}/>
        <Card name="Web Links & Resources" onClick={() => handleClick(setWebLinkHidden)}/>
        {/* Add-More button*/}
        <button className='add-internship-button'>
          <img src={addSquare} alt=""/>
          Add More
        </button>
      </div>
      <div>
        <Category isHidden={categoryHidden}/>
        <Description isHidden={descHidden}/>
        <Location isHidden={locationHidden}/>
        <Benefits isHidden={benefitsHidden}/>
        <IntroVideo isHidden={introVidHidden}/>
        <Mentor isHidden={mentorHidden}/>
        <Roles isHidden={rolesHidden}/>
        <WebLinks isHidden={webLinkHidden}/>
      </div>
    </div>
  )
}
