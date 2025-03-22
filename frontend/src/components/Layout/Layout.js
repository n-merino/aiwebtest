import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>AIWebTest</h1>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 