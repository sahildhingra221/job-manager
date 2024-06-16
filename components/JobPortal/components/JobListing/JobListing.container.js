import React, {
  useContext
} from 'react';
import JobListing from './JobListing';
import {
  JobsContext
} from '@/context/JobContext';
import newJob from './newJob';

const JobListingContainer = () => {
  const {jobsData, updateJobsData} = useContext(JobsContext);

  const handleSelectJob = (idx) => {
    updateJobsData((prevState) => {
      return {
        ...prevState,
        currentJobIndex: idx
      };
    });
  };

  const handleCreateNewJob = () => {
    updateJobsData((prevState) => {
      const updatedJobsList = [
        newJob,
        ...prevState.jobsList
      ];

      return {
        ...prevState,
        currentJobIndex: 0,
        jobsList: updatedJobsList
      };
    });
  };

  return (
    <JobListing
      currentJobIndex={jobsData?.currentJobIndex}
      jobsList={jobsData?.jobsList}
      handleCreateNewJob={handleCreateNewJob}
      handleSelectJob={handleSelectJob}
    />
  );
};

export default JobListingContainer;
