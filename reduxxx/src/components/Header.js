import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Reduxxx Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
