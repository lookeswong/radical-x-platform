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

  return (
    <FormContext.Provider value={{ title, page, setPage, data, setData}}>
      {children}
    </FormContext.Provider>
  )
};

export default FormContext;
