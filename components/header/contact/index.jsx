import React from 'react'
import ContactCompany from './contactCompany'
import LanguageChange from './languageChange'
import styles from './style.module.scss';
const Contact = () => {
  return (
    <div className={styles.contact}>
        <ContactCompany/>
        <LanguageChange/>
    </div>
  )
}

export default Contact