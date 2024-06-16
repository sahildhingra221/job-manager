import React from 'react';
import styled from 'styled-components';

import {
  JobListing,
  JobForm,
  JobPreview
} from './components';
import JobContextProvider from '@/context/JobContext';

const JobPortal = () => (
  <JobContextProvider>
    <Wrapper>
      <JobListing />
      <JobForm />
      <JobPreview />
    </Wrapper>
  </JobContextProvider>
);

const Wrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  height: 100vh;
  padding: 20px 0;
  display: flex;
  gap: 20px;
`;

export default JobPortal;
