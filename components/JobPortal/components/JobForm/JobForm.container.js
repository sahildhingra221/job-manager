import React, {
  useContext
} from 'react';

import JobForm from './JobForm';

import {
  JobsContext
} from '@/context/JobContext';

const JobFormContainer = () => {
  const {jobsData, updateJobsData} = useContext(JobsContext);

  const handleChange = (field, value, keyValue = 'value') => (
    updateJobsData((prevState) => {
      return {
        ...prevState,
        jobsList: prevState.jobsList.map((job, idx) => {
          if (idx === jobsData?.currentJobIndex) {
            return {
              ...job,
              [field]: {
                ...job[field],
                [keyValue]: value
              }
            };
          }
          return job;
        })
      };
    })
  );

  const handleWorkType = (idx, workTypeValue) => (
    updateJobsData((prevState) => {
      const updatedJobsList = [...prevState.jobsList];
      const updatedWorkType = [...updatedJobsList[idx].workType.value];

      const indexToRemove = updatedWorkType.indexOf(workTypeValue);
      if (indexToRemove !== -1) {
        updatedWorkType.splice(indexToRemove, 1);
      } else {
        updatedWorkType.push(workTypeValue);
      }

      updatedJobsList[idx] = {
        ...updatedJobsList[idx],
        workType: {
          ...updatedJobsList[idx].workType,
          value: updatedWorkType
        }
      };

      return {
        ...prevState,
        jobsList: updatedJobsList
      };
    })
  );

  const toggleJobActive = () => {
    updateJobsData((prevState) => {
      return {
        ...prevState,
        jobsList: prevState.jobsList.map((job, idx) => {
          if (idx === jobsData?.currentJobIndex) {
            return {
              ...job,
              isActive: !job.isActive
            };
          }
          return job;
        })
      };
    });
  };

  const toggleSectionHidden = (sectionToHide) => {
    updateJobsData((prevState) => {
      return {
        ...prevState,
        jobsList: prevState.jobsList.map((job, idx) => {
          if (idx === jobsData?.currentJobIndex) {
            return {
              ...job,
              [sectionToHide]: {
                ...job[sectionToHide],
                isHidden: !job[sectionToHide].isHidden
              }
            };
          }
          return job;
        })
      };
    });
  };

  const handleDeleteJob = (idx) => {
    updateJobsData((prevState) => {
      return {
        ...prevState,
        currentJobIndex: jobsData?.jobsList.length === 1 ? -1 : 0,
        jobsList: prevState.jobsList.filter((job, jobIdx) => jobIdx !== idx)
      };
    });
  };

  const handleDuplicateJob = (idx) => {
    updateJobsData((prevState) => {
      const originalJob = prevState.jobsList[idx];
      const duplicatedJob = {
        ...originalJob,
        jobTitle: {
          ...originalJob.jobTitle,
          value: `Copy - ${originalJob.jobTitle.value}`
        }
      };

      const updatedJobsList = [
        ...prevState.jobsList.slice(0, idx + 1),
        duplicatedJob,
        ...prevState.jobsList.slice(idx + 1)
      ];

      return {
        ...prevState,
        currentJobIndex: idx + 1,
        jobsList: updatedJobsList
      };
    });
  };

  return (
    <JobForm
      currentJobIndex={jobsData?.currentJobIndex}
      jobData={jobsData?.jobsList[jobsData?.currentJobIndex]}
      toggleJobActive={toggleJobActive}
      toggleSectionHidden={toggleSectionHidden}
      handleDeleteJob={handleDeleteJob}
      handleDuplicateJob={handleDuplicateJob}
      handleChange={handleChange}
      handleWorkType={handleWorkType}
    />
  );
};

export default JobFormContainer;
