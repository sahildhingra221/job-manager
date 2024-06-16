import React from 'react';
import styled from 'styled-components';
import {
  ButtonDanger,
  ButtonWarning
} from '@/components/UiElements';
import {
  colors
} from '@/constants';
import {
  Toggler
} from '@/components/common';

const JobForm = ({
  currentJobIndex,
  jobData,
  toggleJobActive,
  toggleSectionHidden,
  handleDeleteJob,
  handleDuplicateJob,
  handleChange,
  handleWorkType
}) => (
  currentJobIndex >= 0 ? (
    <Wrapper>
      <ActionButtons>
        <span>Active</span>
        {' '}
        <Toggler
          onClick={toggleJobActive}
          toggled={jobData?.isActive}
        />
        <ButtonWarning onClick={() => handleDuplicateJob(currentJobIndex)}>
          <img src="/assets/icons/duplicate-icon.svg" alt="duplicate-icon" />
          <span>Duplicate</span>
        </ButtonWarning>
        <ButtonDanger onClick={() => handleDeleteJob(currentJobIndex)}>
          <img src="/assets/icons/trash-icon.svg" alt="delete-icon" />
          <span>Delete</span>
        </ButtonDanger>
      </ActionButtons>
      <FormWrapper>

        <SectionTitle>
          <Label>
            Company Name
          </Label>
          <Toggler
            onClick={() => toggleSectionHidden('companyName')}
            toggled={!jobData?.companyName?.isHidden}
          />
        </SectionTitle>
        <input
          type="text"
          onChange={(e) => handleChange('companyName', e.target.value)}
          value={jobData?.companyName?.value}
        />

        <SectionTitle>
          <Label>
            Company Logo Url
          </Label>
          <Toggler
            onClick={() => toggleSectionHidden('companyLogoUrl')}
            toggled={!jobData?.companyLogoUrl?.isHidden}
          />
        </SectionTitle>
        <input
          type="text"
          onChange={(e) => handleChange('companyLogoUrl', e.target.value)}
          value={jobData?.companyLogoUrl?.value}
        />

        <SectionTitle>
          <Label>
            Job Title
          </Label>
          <Toggler
            onClick={() => toggleSectionHidden('jobTitle')}
            toggled={!jobData?.jobTitle?.isHidden}
          />
        </SectionTitle>
        <input
          type="text"
          onChange={(e) => handleChange('jobTitle', e.target.value)}
          value={jobData?.jobTitle?.value}
        />
        <GridSection>
          <GridItem>
            <SectionTitle>
              <Label>
                Job Location
              </Label>
              <Toggler
                onClick={() => toggleSectionHidden('jobLocation')}
                toggled={!jobData?.jobLocation?.isHidden}
              />
            </SectionTitle>
            <input
              type="text"
              onChange={(e) => handleChange('jobLocation', e.target.value)}
              value={jobData?.jobLocation?.value}
            />
          </GridItem>
          <GridItem>
            <SectionTitle>
              <Label>
                Salary
              </Label>
              <Toggler
                onClick={() => toggleSectionHidden('salary')}
                toggled={!jobData?.salary?.isHidden}
              />
            </SectionTitle>
            <input
              type="text"
              onChange={(e) => handleChange('salary', e.target.value)}
              value={jobData?.salary?.value}
            />
          </GridItem>
        </GridSection>

        <GridSection>
          <GridItem>
            <SectionTitle>
              <Label>
                Job Type
              </Label>
              <Toggler
                onClick={() => toggleSectionHidden('jobType')}
                toggled={!jobData?.jobType?.isHidden}
              />
            </SectionTitle>
            <select
              onChange={(e) => handleChange('jobType', e.target.value)}
              value={jobData?.jobType?.value}
            >
              <option value="Full Time">Full Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </GridItem>
          <GridItem>
            <SectionTitle>
              <Label>
                Experience Range
              </Label>
              <Toggler
                onClick={() => toggleSectionHidden('experience')}
                toggled={!jobData?.experience?.isHidden}
              />
            </SectionTitle>
            <GridSection className="grid-2">
              <select
                onChange={(e) => handleChange('experience', e.target.value, 'minValue')}
                value={jobData?.experience?.minValue}
              >
                <option value="" disabled selected>Min</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <select
                onChange={(e) => handleChange('experience', e.target.value, 'maxValue')}
                value={jobData?.experience?.maxValue}
              >
                <option value="" selected disabled>Max</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </GridSection>
          </GridItem>
        </GridSection>

        <SectionTitle>
          <Label>
            Work Type
          </Label>
          <Toggler
            onClick={() => toggleSectionHidden('workType')}
            toggled={!jobData?.workType?.isHidden}
          />
        </SectionTitle>
        <CheckboxesWrapper>
          <label>
            <input
              type="checkbox"
              onChange={() => handleWorkType(currentJobIndex, 'Remote')}
              checked={jobData?.workType?.value.includes('Remote') ? 'checked' : ''}
            />
            <span>Remote</span>
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleWorkType(currentJobIndex, 'Hybrid')}
              checked={jobData?.workType?.value.includes('Hybrid') ? 'checked' : ''}
            />
            <span>Hybrid</span>
          </label>
          <label>
            <input
              type="checkbox"
              onChange={() => handleWorkType(currentJobIndex, 'On Site')}
              checked={jobData?.workType?.value.includes('On Site') ? 'checked' : ''}
            />
            <span>On Site</span>
          </label>
        </CheckboxesWrapper>

        <SectionTitle>
          <Label>
            Description
          </Label>
          <Toggler
            onClick={() => toggleSectionHidden('description')}
            toggled={!jobData?.description?.isHidden}
          />
        </SectionTitle>
        <textarea
          onChange={(e) => handleChange('description', e.target.value)}
          value={jobData?.description?.value}
        />

        <SectionTitle>
          <Label>
            Role and Responsibilites
          </Label>
          <Toggler
            onClick={() => toggleSectionHidden('roleAndRes')}
            toggled={!jobData?.roleAndRes?.isHidden}
          />
        </SectionTitle>
        <textarea
          onChange={(e) => handleChange('roleAndRes', e.target.value)}
          value={jobData?.roleAndRes?.value}
        />

      </FormWrapper>
    </Wrapper>
  ) : null
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 420px;
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-size: 12px;
    opacity: 0.8;
  }

  div:nth-child(2) {
    scale: 0.8;
    transform: translateX(-5px);
  }

  button:nth-child(3) {
    margin-left: auto;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 15px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  input, select, textarea {
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
    padding: 5px;
    outline: none;
    background-color: #fcfcff;
    
    &:active, &:focus {
      border: 1px solid ${colors.PaveLavender};
    }
  }

  textarea {
    min-height: 100px;
    resize: none;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const GridItem = styled.div`
  padding-top: 10px;
`;

const SectionTitle = styled.h3`
  display: flex;
  align-items: center;

  div {
    scale: 0.6;
    margin-left: auto;
    transform: translateX(15px);
  }

  &:not(:first-child) {
    padding-top: 15px;
  }
`;

const CheckboxesWrapper = styled.div`
  display: flex;
  gap: 10px;

  label {
    display: flex;
    flex: 1;
    gap: 7px;
    border-radius: 5px;
    border: 1px solid ${colors.PaveLavender};
    padding: 5px 10px;
    cursor: pointer;
    user-select: none;
    font-size: 14px;

    input {
      width: fit-content;
      scale: 0.9;
    }
  }
`;

const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
  opacity: 0.8;
`;

export default JobForm;
