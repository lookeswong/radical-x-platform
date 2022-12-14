import React from 'react';
import useFormContext from '../../hooks/useFormContext';
import FormInputs from './FormInputs';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function Form() {
  const { 
    title,
    page, 
    setPage, 
    data,
    disablePrev,
    disableNext,
    nextHide,
    submitHide,
    canSubmit
  } = useFormContext();

  const handlePrev = () => {
    if (page > 0) {
      setPage(prev => prev - 1)
    }
  };

  const handleNext = () => setPage(prev => prev + 1);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(JSON.stringify(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Header 
          page={page} 
          handleNext={handleNext} 
          handlePrev={handlePrev} 
          disablePrev={disablePrev} 
          disableNext={disableNext} 
          submitHide={submitHide}
          nextHide={nextHide}
          canSubmit={canSubmit}
        />
        <ProgressBar 
          page={page}
          title={title}
        />
        <FormInputs />
      </form>
    </div>
  )
}
