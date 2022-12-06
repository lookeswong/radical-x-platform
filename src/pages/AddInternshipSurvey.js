import React from 'react';
import Header from '../components/Header/Header';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import InternshipSurvey from '../components/InternshipSurvey/InternshipSurvey';

import '../styles/addNewInternship.css';

export default function AddInternshipSurvey() {
  return (
    <div>
      <div>
        <Header />
        <ProgressBar />
      </div>
      <div className='container-internship-cards'>
        <InternshipSurvey />
      </div>
    </div>
  )
}
