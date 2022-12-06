import React from 'react';
import Header from '../components/Header/Header';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import InternshipGuide from '../components/InternshipGuide/InternshipGuide';

import '../styles/addNewInternship.css';

export default function AddNewInternshipGuide() {
  return (
    <div>
      <div>
        <Header />
        <ProgressBar />
      </div>
      <div className="container-internship-cards">
        <InternshipGuide />
      </div>
    </div>
  )
}
