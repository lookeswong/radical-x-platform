import React, {useState } from 'react';
import Card from '../Card/Card';
import useFormContext from '../../hooks/useFormContext';

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
  const [hidden, setHidden] = useState();

  const { data } = useFormContext();

  const cardObjects = {
    category: {
      name: "Category",
      component: Category,
      formData: data.descCategory,
    },
    description: {
      name: "Description",
      component: Description,
      formData: data.descDescription
    },
    location: {
      name: "Location",
      component: Location,
      formData: data.descLocation
    },
    benefits: {
      name: "Benefits",
      component: Benefits,
      formData: data.descBenefits
    },
    intro: {
      name: "Intro Video",
      component: IntroVideo,
      formData: data.descIntro
    },
    mentor: {
      name: "Mentor Details",
      component: Mentor,
      formData: [data.descMentorName, data.descMentorEmail, data.descMentorLinkedIn]
    },
    roles: {
      name: "Recommended Roles",
      component: Roles,
      formData: data.descRoles
    },
    webLinks: {
      name: "Web Links & Resources",
      component: WebLinks,
      formData: data.descWebLinks
    },
  };

  // Mapping card objects to keys
  const CardObjectKeys = Object.keys(cardObjects);

  const CardComponent = cardObjects[hidden] ? cardObjects[hidden].component : null;
  
  const currentSelectedName = cardObjects[hidden] ? cardObjects[hidden].name : null;

  const handleClick = (name) => {
    if (cardObjects[name].component) {
      setHidden(name);
    }
  };

  // function to add more description card - implement it later
  // const addDescription = (name, isSelected) => {
  //   setInternshipDescriptions(prevState => {
  //     return [...prevState, {name, isSelected}]
  //   })
  // }

  return (
    // Old code that works!
    <div className='container--internship-description'>
      <div>
        {/* UPDATES -  solution to render left card component with lesser code */}
        {CardObjectKeys.map((itemKey) => (
          <Card 
            key={itemKey}
            name={cardObjects[itemKey].name}
            onClick={() => handleClick(itemKey)}
            formData={cardObjects[itemKey].formData}
            currentSelected={currentSelectedName}
          />
        ))}
        {/* Add-More button*/}
        <button className='add-internship-button'>
          <img src={addSquare} alt=""/>
          Add More
        </button>
      </div>
      <div>
        {hidden ? <CardComponent /> : null}
      </div>
    </div>
  )
}
