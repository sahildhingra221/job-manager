import React, {
  createContext,
  useState
} from 'react';

import dummyJobsList from './dummyJobsList';

export const JobsContext = createContext();

const JobContextProvider = ({children}) => {
  const [jobsData, setJobsData] = useState({
    currentJobIndex: 0,
    jobsList: dummyJobsList
  });

  const updateJobsData = (newJobsData) => {
    setJobsData(newJobsData);
  };

  return (
    <JobsContext.Provider value={{jobsData, updateJobsData}}>
      {children}
    </JobsContext.Provider>
  );
};

export default JobContextProvider;
