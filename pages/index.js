import React from 'react';
import Head from 'next/head';
import JobPortal from '@/components/JobPortal/JobPortal';

const index = () => (
  <>
    <Head>
      <title>Job Managing Portal</title>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EH176242C9"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EH176242C9');
            `
        }}
      />
    </Head>
    <JobPortal />
  </>
);

export default index;
