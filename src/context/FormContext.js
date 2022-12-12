import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({children}) => {
  const title = {
    0: 'Internship Description',
    1: 'Internship Guide',
    2: 'Internship Surveys',
    3: 'Internship Settings',
  }

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    category: "",
    description: "",
    location: "",
    benefits: "",
    intro: false,
    mentor: "",
    roles: "",
    links: "",
  })

  const disablePrev = page === 0;

  // work on next button - only allow to click after fill up all the form;
  const disableNext = (page === Object.keys(title).length - 1);

  const nextHide = page === Object.keys(title).length - 1 && "remove-button";

  const submitHide = page !== Object.keys(title).length - 1 && "remove-button";

  return (
    <FormContext.Provider value={{ title, page, setPage, data, setData, disablePrev, disableNext, nextHide, submitHide}}>
      {children}
    </FormContext.Provider>
  )
};

export default FormContext;
