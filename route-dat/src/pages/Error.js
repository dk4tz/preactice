import React from 'react';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <main>
        <h1>You done goofed homie. Page don't exist.</h1>
      </main>
    </>
  );
};

export default ErrorPage;
