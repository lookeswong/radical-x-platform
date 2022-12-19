import React from 'react';
import useFormContext from '../../hooks/useFormContext';
import FormInputs from './FormInputs';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Link } from "react-router-dom";

import leftArrow from "../../images/arrow-left.svg";
import rightArrow from "../../images/arrow-right.svg";

export default function Form() {
  const { 
    page, 
    setPage, 
    data,
    disablePrev,
    disableNext,
    nextHide,
    submitHide,
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
        />
        <ProgressBar />
        <FormInputs />
      </form>
    </div>
  )
}
