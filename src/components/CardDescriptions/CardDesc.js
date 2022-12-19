import React from 'react';

import Category from '../CardDescriptions/Category/Category';
import Description from '../CardDescriptions/Description/Description';
import Location from '../CardDescriptions/Locations/Location';
import Benefits from '../CardDescriptions/Benefits/Benefits';
import Roles from '../CardDescriptions/Roles/Roles';
import WebLinks from '../CardDescriptions/WebLinks/WebLinks';
import IntroVideo from '../CardDescriptions/IntroVideo/IntroVideo';
import Mentor from '../CardDescriptions/Mentor/Mentor';

export default function CardDesc({cardObjects, hidden}) {

  // cardObjects[hidden] ? cardObjects[hidden].component : null;

  return (
    <div>
      {cardObjects[hidden] ? cardObjects[hidden].component : null}
    </div>
  )
}
