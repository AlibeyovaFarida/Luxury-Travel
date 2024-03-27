import Image from 'next/image'
import React from 'react'
import Operator from '@/assets/Operator.svg'
import styles from './style.module.scss'
import { useTranslations } from 'next-intl'
const ContactCompany = () => {
  const t = useTranslations("HeaderComponent")
  return (
    <div className={styles['contact-company']}>
      <div className={styles.operator}>
        <Image src={Operator} alt="operator"/>
      </div>
      <div className={styles['contact-number']}>
        <h5>{t("contact")}</h5>
        <span>+994 (55) 203-43-33</span>
      </div>
    </div>
  );
}

export default ContactCompany