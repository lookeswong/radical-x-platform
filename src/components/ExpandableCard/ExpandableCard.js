import React, {useState} from 'react';
import { motion } from 'framer-motion';
import InnerCard from '../InternshipGuide/InnerCard';
import Card from '../Card/Card';

import './ExpandableCard.css';
import menuLogo from '../../images/menu.svg';
import rightArrow from '../../images/arrow-right-internship.svg';

export default function ExpandableCard({name}) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='container--expand-card'>
      <div>
        <img src={menuLogo} alt=""/>
      </div>
      <motion.div 
      layout 
      transition={{layout: {duration: 1, type:"spring"}}} 
      onClick={() => setIsOpen(!isOpen)} 
      className='expand-card'>
        <motion.div layout="position" className='expand-card-text'>
          <motion.p layout="position">{name}</motion.p>
          <img src={rightArrow} alt=""/>
        </motion.div>
        {isOpen && 
          <motion.div 
          initial={{opacity: 0}} 
          animate={{opacity: 1}} 
          transition={{duration: 1}} 
          className="expand-content"
          >
            <InnerCard name="Brief"/>
            <InnerCard name="Brief"/>
            <InnerCard name="Brief"/>
          </motion.div>
        }
      </motion.div>
    </div>
  )
}
