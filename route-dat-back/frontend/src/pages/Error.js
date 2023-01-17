import React from 'react';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

import PageContent from '../components/PageContent';

const ErrorPage = () => {
  const error = useRouteError();
  let title = 'An error occurred.';
  let message = 'We done goofed homie.';

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status == 404) {
    title = 'Not found!';
    message = 'You done goofed homie.';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
