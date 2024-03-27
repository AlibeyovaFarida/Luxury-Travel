import React from 'react'
import Contact from './contact'
import Logo from '../logo'
import Navbar from './navbar'
import styles from './style.module.scss'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-components']}>
        <Logo />
        <Navbar />
        <Contact />
      </div>
    </header>
  );
}

export default Header