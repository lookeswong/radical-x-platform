import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({children}) => {
  const title = {
    0: 'Internship Description',
    1: 'Internship Guide',
    2: 'Surveys',
    3: 'Settings',
  }

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    descCategory: "",
    descDescription: "",
    descLocation: "",
    descBenefits: "",
    descIntro: "",
    descMentorName: "",
    descMentorEmail: "",
    descMentorLinkedIn: "",
    descRoles: "",
    descWebLinks: "",
    guideOvBrief: "",
    guideOvRequirement: "",
    guideOverviewMilestone: "",
    guideScDuration: "",
    guideScTimeline: "",
    guideScDeliverable: "",
    guideMiResources: "",
    guideMiEvents: "",
    surSurvey1: "",
    surSurvey2: "",
    settingBasic: "",
    settingHero: "",
  });

  const handleChange = e => {
    const type = e.target.type;
    const name = e.target.name;

    const value = type === "checkbox" ? e.target.checked : e.target.value;

    setData((prevData) => ({...prevData, [name]: value}))
  };

  // allow to go to the next form page when condition is met
  const starter = {
    0: 'desc',
    1: 'guide',
    2: 'sur',
    3: 'setting',
  };
  const canNextPage = Object.keys(data)
    .filter(key => key.startsWith(starter[page]))
    .map(key => data[key])
    .every(Boolean);

  // allow to submit after everything is filled;
  let canSubmit;
  if (page === Object.keys(title).length - 1) {
    canSubmit = [...Object.values(data)].every(Boolean) && page === Object.keys(title).length - 1;
  };

  const disablePrev = page === 0;

  // work on next button - only allow to click after fill up all the form;
  const disableNext = (page === Object.keys(title).length - 1) 
    || (page === 0 && !canNextPage) 
    || (page === 1 && !canNextPage)
    || (page === 2 && !canNextPage);

  const nextHide = page === Object.keys(title).length - 1 && "remove-button";

  const submitHide = page !== Object.keys(title).length - 1 && "remove-button";

  return (
    <FormContext.Provider value={{ title, page, setPage, data, setData, handleChange, disablePrev, disableNext, nextHide, submitHide, canSubmit}}>
      {children}
    </FormContext.Provider>
  )
};

export default FormContext;
