import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>My homepage</h1>
      <p>
        Go to the <Link to='/products'>products page</Link>
      </p>
    </>
  );
};

export default HomePage;
