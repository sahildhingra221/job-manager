import React from 'react';
import styled from 'styled-components';
import {
  Badge,
  ButtonPrimary
} from '@/components/UiElements';
import {
  colors
} from '@/constants';
import {
  CompanyLogo, JobCompany, JobInfo, JobItem,
  JobLocation,
  JobTitle
} from '../JobListing/JobListing';

const JobPreview = ({
  currentJobIndex,
  jobData
}) => (
  currentJobIndex >= 0 ? (
    <Wrapper>
      <ActionButtons>
        {
          jobData?.isActive ? (
            <ButtonPrimary>
              <span>Apply</span>
              <img src="/assets/icons/arrow-right-icon.svg" alt="right-arrow-icon" />
            </ButtonPrimary>
          ) : (
            <AlertText>No Longer accepting applications!</AlertText>
          )
        }
      </ActionButtons>
      <PreviewWrapper>

        <CompanyOverview>
          {
          !jobData?.companyLogoUrl?.isHidden ? (
            <CompanyLogo src={jobData?.companyLogoUrl?.value} alt="company-icon" />
          ) : ('')
        }

          <JobInfo>
            {
            !jobData?.jobTitle?.isHidden ? (
              <JobTitle>
                {jobData?.jobTitle?.value}
              </JobTitle>
            ) : ('')
          }

            {
            !jobData?.companyName?.isHidden ? (
              <JobCompany>
                {jobData?.companyName?.value}
              </JobCompany>
            ) : ('')
          }

            {
            !jobData?.jobLocation?.isHidden ? (
              <JobLocation>
                {jobData?.jobLocation?.value}
              </JobLocation>
            ) : ('')
          }
          </JobInfo>
        </CompanyOverview>

        <CardsWrapper>
          {
          !jobData?.experience?.isHidden ? (
            <CardItem>
              <CardTitle>
                Experience
              </CardTitle>
              <CardInfo>
                {jobData?.experience?.minValue}
                {' '}
                -
                {' '}
                {jobData?.experience?.maxValue}
                {' '}
                Yrs
              </CardInfo>
            </CardItem>
          ) : ('')
        }

          {
          !jobData?.jobType?.isHidden ? (
            <CardItem>
              <CardTitle>
                Job Type
              </CardTitle>
              <CardInfo>
                {jobData?.jobType?.value}
              </CardInfo>
            </CardItem>
          ) : ('')
        }

          {
          !jobData?.salary?.isHidden ? (
            <CardItem>
              <CardTitle>
                Salary
              </CardTitle>
              <CardInfo>
                {jobData?.salary?.value}
              </CardInfo>
            </CardItem>
          ) : ('')
        }

        </CardsWrapper>

        {
        !jobData?.workType?.isHidden ? (

          <BadgesWrapper>
            {jobData?.workType?.value.map((workType) => (
              <Badge>{workType}</Badge>
            ))}
          </BadgesWrapper>
        ) : ('')
      }

        {
        !jobData?.description?.isHidden ? (
          <>
            <SectionTitle>
              Description
            </SectionTitle>
            <Text>
              {jobData?.description?.value}
            </Text>
          </>
        ) : ('')
      }

        {
        !jobData?.roleAndRes?.isHidden ? (
          <>
            <SectionTitle>
              Role and Responsibilities
            </SectionTitle>
            <Text>
              {jobData?.roleAndRes?.value}
            </Text>
          </>
        ) : ('')
      }

      </PreviewWrapper>
    </Wrapper>
  ) : null
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-right: 10px;
`;

const AlertText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: red;
  padding: 9px 0;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  &:has(p) {
    justify-content: center;
  }
`;

const PreviewWrapper = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 13px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

const CompanyOverview = styled(JobItem)`
  padding: 0!important;
  box-shadow: none!important;
  pointer-events: none!important;
`;

const BadgesWrapper = styled.div`
  display: flex;
  gap: 15px;
  padding: 5px 0 10px;
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 15px;
  padding: 5px 0 20px;
`;

const CardItem = styled.div`
  text-align: center;
  padding: 13px 10px;
  border: 1px solid ${colors.PaveLavender};
  border-radius: 5px;
  font-size: 14px;
  flex: 1; 
`;

const CardTitle = styled.h4`
  font-size: 15px;
`;

const CardInfo = styled.p`
  opacity: 0.7;
  padding-top: 8px;
`;

const SectionTitle = styled.h2`
  padding: 10px 0;
  font-size: 20px;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.5;
  text-align: justify;
  opacity: 0.7;
`;

export default JobPreview;
