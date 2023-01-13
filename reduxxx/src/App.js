import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuthenticated ? <Auth /> : <UserProfile />}
      <Counter />
    </>
  );
};

export default App;
