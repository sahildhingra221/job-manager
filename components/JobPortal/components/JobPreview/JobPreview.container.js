import React, {
  useContext
} from 'react';
import JobPreview from './JobPreview';
import {
  JobsContext
} from '@/context/JobContext';

const JobPreviewContainer = () => {
  const {jobsData} = useContext(JobsContext);

  return (
    <JobPreview
      currentJobIndex={jobsData.currentJobIndex}
      jobData={jobsData?.jobsList[jobsData?.currentJobIndex]}
    />
  );
};

export default JobPreviewContainer;
