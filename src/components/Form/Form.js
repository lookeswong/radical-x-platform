import React from 'react';
import useFormContext from '../../hooks/useFormContext';
import FormInputs from './FormInputs';
import Header from '../Header/Header';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function Form() {
  return (
    <div>
      <Header />
      <ProgressBar />
      <FormInputs />
    </div>
  )
}
