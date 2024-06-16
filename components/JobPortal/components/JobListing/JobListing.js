import React from 'react';
import styled from 'styled-components';
import {
  ButtonOutlined
} from '@/components/UiElements';
import {
  colors
} from '@/constants';

const JobListing = ({
  currentJobIndex,
  jobsList,
  handleCreateNewJob,
  handleSelectJob
}) => (
  <Wrapper>
    <CreateNewBtn onClick={handleCreateNewJob}>
      <img src="/assets/icons/plus-icon.svg" alt="add-icon" />
      <span>Create New</span>
    </CreateNewBtn>
    <JobListWrapper>
      {
        jobsList && jobsList.length ? jobsList.map((job, idx) => (
          <JobItem onClick={() => handleSelectJob(idx)} className={currentJobIndex === idx ? 'active' : ''}>
            <CompanyLogo src={job?.companyLogoUrl?.value ?? ''} alt="company-icon" />
            <JobInfo>
              <JobTitle>
                {job?.jobTitle?.value ?? ''}
              </JobTitle>
              <JobCompany>
                {job?.companyName?.value ?? ''}
              </JobCompany>
              <JobLocation>
                {job?.jobLocation?.value ?? ''}
              </JobLocation>
            </JobInfo>
          </JobItem>
        )) : ('Create new job!')
      }
    </JobListWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
`;

const CreateNewBtn = styled(ButtonOutlined)`
  margin-left: 10px;
`;

const JobListWrapper = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 5px;
  padding: 10px;
`;

export const JobItem = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  font-size: 14px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.05s ease-in-out;
  display: flex;
  gap: 15px;
  border: 1px solid transparent;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover, &.active {
    background-color: ${colors.Magnolia};
    border-color: ${colors.PaveLavender};
  }

  &.active {
  }
`;

export const CompanyLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  object-fit: cover;
  flex-shrink: 0;
  background-color: #fff;
`;

export const JobInfo = styled.div`
  flex: 1;
`;

export const JobTitle = styled.h2`
  font-size: 17px;
  color: ${colors.HanPurple};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 245px;
  font-family: Martel;
  line-height: 1.1;
  font-weight: 600;
`;

export const JobCompany = styled.p`
  opacity: 0.6;
  padding: 5.5px 0 6px;
`;

export const JobLocation = styled.p``;

export default JobListing;
