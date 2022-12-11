// import React from "react";
// import Header from "../components/Header/Header";
// import ProgressBar from "../components/ProgressBar/ProgressBar";
// import InternshipCards from "../components/InternshipCards/InternshipCards";

import Form from "../components/Form/Form";
import { FormProvider } from "../context/FormContext";

import '../styles/addNewInternship.css';

export default function AddNewInternship() {
  return (
    // <div>
    //   <div>
    //     <Header />
    //     <ProgressBar />
    //   </div>
    //   <div className="container-internship-cards">
    //     <InternshipCards />
    //   </div>
    // </div>
    <div>
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  )
}