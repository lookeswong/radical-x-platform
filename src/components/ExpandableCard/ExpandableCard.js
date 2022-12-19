import React, {useState} from 'react';
import { motion } from 'framer-motion';
import InnerCard from '../InternshipGuide/InnerCard';

import './ExpandableCard.css';
import menuLogo from '../../images/menu.svg';
import rightArrow from '../../images/arrow-right-internship.svg';
import addSquare from '../../images/add-square-purple.svg';
import tickCircle from '../../images/tick-circle.svg';

export default function ExpandableCard({name, subComponent, formData, onClick}) {

  const requireData = formData;
  // console.log(requireData)

  let canSubmit = [...Object.values(requireData)].every(Boolean);

  let isFilled = canSubmit ? '' : 'remove-tick'; 

  const [isOpen, setIsOpen] = useState(false);

  const buttonPressed = () => {
    onClick();
    setIsOpen(!isOpen)
  }

  return (
    <div className='container--expand-card'>
      <div>
        <img src={menuLogo} alt=""/>
      </div>
      <motion.div 
        layout 
        transition={{layout: {duration: 1, type:"spring"}}} 
        // onClick={() => setIsOpen(!isOpen)} 
        onClick={buttonPressed}
        className='expand-card'
      >
        <motion.div layout="position" className='expand-card-text'>
          <div className='card-text'>
            <motion.p layout="position">{name}</motion.p>
            <div className={isFilled}>
              <img src={tickCircle} alt=""/>
            </div>
          </div>
          <img src={rightArrow} alt=""/>
        </motion.div>
        {isOpen && 
          <motion.div 
          initial={{opacity: 0}} 
          animate={{opacity: 1}} 
          transition={{duration: 1}} 
          className="expand-content"
          >
            {subComponent.map((cardName) => (
              <InnerCard key={cardName} name={cardName}/>
            ))}
            <button className='add-inner-button'>
              <img src={addSquare} alt=""/>
              Add More
            </button>
          </motion.div>
        }
      </motion.div>
    </div>
  )
}
