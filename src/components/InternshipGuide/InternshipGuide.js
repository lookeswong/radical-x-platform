import React, {useState} from 'react';
import ExpandableCard from '../ExpandableCard/ExpandableCard';
// import GuideDescription from '../GuideDescription/GuideDescription';
import Guide from '../CardDescriptions/Guide/Guide';

import './InternshipGuide.css';

export default function InternshipGuide() {
  // useState to allow track card to check if its selected and expand it
  const [isExpanded, setIsExpanded] = useState(false);

  const mockCard = {
    overview: {
      name: "Overview",
      subComponent: ["Brief", "Requirements", "Milestones"],
    },
    schedule: {
      name: "Schedule",
      subComponent: ["Duration", "Timeline", "Deliverables"],
    },
    overview: {
      name: "Overview",
      subComponent: ["Curated Resources", "Events"],
    },
  }

    // Mapping card objects to keys
    const ExpandCardObjectKeys = Object.keys(mockCard);


  return (
    <div className='container--internship-guide'>
      {/* <motion.div className='guide-card'>
        <motion.p>Overview</motion.p>
      </motion.div> */}
      <div>
        <ExpandableCard name="Overview"/>
        <ExpandableCard name="Overview"/>
        <ExpandableCard name="Overview"/>
        {/* {isExpanded ? <ExpandableCard name="Overview"/> : <Card name="Overview"/>}
        {isExpanded ? <ExpandableCard name="Overview"/> : <Card name="Overview"/>}
        {isExpanded ? <ExpandableCard name="Overview"/> : <Card name="Overview"/>}
        {isExpanded ? <ExpandableCard name="Overview"/> : <Card name="Overview"/>} */}
      </div>
      <div className='container--guide-descriptions'>
        <Guide />
        <Guide />
        <Guide />
      </div>
    </div>
  )
}
