import React, {useState} from 'react';
import ExpandableCard from '../ExpandableCard/ExpandableCard';
// import GuideDescription from '../GuideDescription/GuideDescription';
import Guide from '../CardDescriptions/Guide/Guide';

import './InternshipGuide.css';
import addItemIcon from '../../images/additem.svg';

export default function InternshipGuide() {
  // useState to allow track card to check if its selected and expand it
  const [isExpanded, setIsExpanded] = useState();

  const mockCard = {
    overview: {
      name: "Overview",
      subComponent: ["Brief", "Requirements", "Milestones"],
    },
    schedule: {
      name: "Schedule",
      subComponent: ["Duration", "Timeline", "Deliverables"],
    },
    milestones: {
      name: "Milestones",
      subComponent: ["Curated Resources", "Events"],
    },
  };

  // Mapping card objects to keys
  const ExpandCardObjectKeys = Object.keys(mockCard);

  const subCardComponent = mockCard[isExpanded] ? mockCard[isExpanded].subComponent : null;

  const handleClick = (name) => {
    if (mockCard[name]) {
      setIsExpanded(name);
    }
    console.log(isExpanded)
  };

  const cardObjectValues = Object.values(mockCard);

  const removeBackground = isExpanded ? null : 'remove-background';

  return (
    <div className='container--internship-guide'>
      <div>
        {/* <ExpandableCard name={mockCard.overview.name} subComponent={mockCard.overview.subComponent}/>
        <ExpandableCard name={mockCard.schedule.name} subComponent={mockCard.schedule.subComponent}/>
        <ExpandableCard name={mockCard.milestones.name} subComponent={mockCard.milestones.subComponent}/> */}
        {ExpandCardObjectKeys.map((itemKey) => (
          <ExpandableCard 
            key={itemKey}
            name={mockCard[itemKey].name}
            subComponent={mockCard[itemKey].subComponent}
            onClick={() => handleClick(itemKey)}
          />
        ))}
        <button type="button" className='add-guide-button'>
          <img src={addItemIcon} alt=''/>
          Add Chapter
        </button>
      </div>
      <div className={`container--guide-descriptions ${removeBackground}`}>
        {/* <Guide subComponent={mockCard.overview.subComponent}/>
        <Guide subComponent={mockCard.schedule.subComponent}/>
        <Guide subComponent={mockCard.milestones.subComponent}/> */}

        {/* {cardObjectValues.map((innerguide) => {
          return innerguide.subComponent.map(subcomp => <Guide key={subcomp} name={subcomp}/>)
        })} */}

        {isExpanded && subCardComponent.map((subCard) => <Guide key={subCard} name={subCard}/>)}
      </div>
    </div>
  )
}
