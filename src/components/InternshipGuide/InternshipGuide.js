import React, {useState} from 'react';
import ExpandableCard from '../ExpandableCard/ExpandableCard';
// import GuideDescription from '../GuideDescription/GuideDescription';
import Guide from '../CardDescriptions/Guide/Guide';
import useFormContext from "../../hooks/useFormContext";

import './InternshipGuide.css';
import addItemIcon from '../../images/additem.svg';

export default function InternshipGuide() {
  // useState to allow track card to check if its selected and expand it
  const [isExpanded, setIsExpanded] = useState();

  const { data } = useFormContext();

  const mockCard = {
    overview: {
      name: "Overview",
      subComponent: ["Brief", "Requirements", "Milestones"],
      formName:["guideOvBrief", "guideOvRequirement", "guideOverviewMilestone"],
      formData: [data.guideOvBrief, data.guideOvRequirement, data.guideOverviewMilestone]
    },
    schedule: {
      name: "Schedule",
      subComponent: ["Duration", "Timeline", "Deliverables"],
      formName:["guideScDuration", "guideScTimeline", "guideScDeliverable"],
      formData: [data.guideScDuration, data.guideScTimeline, data.guideScDeliverable]
    },
    milestones: {
      name: "Milestones",
      subComponent: ["Curated Resources", "Events"],
      formName:["guideMiResources", "guideMiEvents"],
      formData: [data.guideMiResources, data.guideMiEvents]
    },
  };

  // Mapping card objects to keys
  const ExpandCardObjectKeys = Object.keys(mockCard);
  
  const cardObjectValues = Object.values(mockCard);

  const subCardComponent = mockCard[isExpanded] ? mockCard[isExpanded].subComponent : null;
  const guideFormName = mockCard[isExpanded] ? mockCard[isExpanded].formName : null;
  const guideFormData = mockCard[isExpanded] ? mockCard[isExpanded].formData : null;

  // const subCardComponent = mockCard[isExpanded] ? mockCard[isExpanded].subComponent : null;

  const handleClick = (name) => {
    if (mockCard[name]) {
      setIsExpanded(name);
    }
    // console.log(isExpanded)
  };

  const removeBackground = isExpanded ? null : 'remove-background';

  return (
    <div className='container--internship-guide'>
      <div>
        {ExpandCardObjectKeys.map((itemKey) => (
          <ExpandableCard 
            key={itemKey}
            name={mockCard[itemKey].name}
            subComponent={mockCard[itemKey].subComponent}
            formData={mockCard[itemKey].formData}
            onClick={() => handleClick(itemKey)}
          />
        ))}
        <button type="button" className='add-guide-button'>
          <img src={addItemIcon} alt=''/>
          Add Chapter
        </button>
      </div>
      <div className={`container--guide-descriptions ${removeBackground}`}>
        {/* {isExpanded && subCardComponent.map((subCard) => (
          <Guide key={subCard} name={subCard}/>
          // <Guide key={subCard} name={subCard} guide={} formData={}/>
        ))} */}
        {isExpanded && subCardComponent.map((subCard, index) => (
          <Guide key={subCard} name={subCard} guide={guideFormName[index]} formData={guideFormData[index]}/>
        ))}
      </div>
    </div>
  )
}
