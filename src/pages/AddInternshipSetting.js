import React from 'react';
import Header from '../components/Header/Header';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import InternshipSetting from '../components/InternshipSetting/InternshipSetting';

import '../styles/addNewInternship.css';

export default function AddInternshipSetting() {
  return (
    <div>
      <div>
        <Header />
        <ProgressBar />
      </div>
      <div className='container-internship-cards'>
        <InternshipSetting />
      </div>
    </div>
  )
}
