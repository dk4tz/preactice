import React from 'react';

import styles from './Auth.module.css';

const Auth = () => {
  return (
    <main className={styles.auth}>
      <section>
        <form>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
