import React from 'react'
import styles from './style.module.scss'
import Logo from '../logo'
import Link from 'next/link';
import Whatsapp from '../../assets/whatsapp-icon.svg'
import Instagram from '../../assets/footer-instagram-icon.svg'
import Image from 'next/image';
import { useTranslations } from 'next-intl';
const Footer = () => {
  const t = useTranslations("FooterComponent");
  return (
    <div className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-content-top"]}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles["footer-details"]}>
            <div className={styles["contact-us"]}>
              <h6>{t("title")}</h6>
              <div>
                <span>+994 (55) 203-43-33</span>
                <Link href="mailto: info@luxurytravel.az">
                  info@luxurytravel.az
                </Link>
              </div>
            </div>
            <div className={styles["find-us"]}>
              <h6>Find us</h6>
              <div>
                <p>
                  {t("locationPart1")}
                  {<br />}
                  {t("locationPart2")}
                </p>
                <span>{t("clock")}</span>
              </div>
              <div className={styles["social-media"]}>
                <Link href="https://api.whatsapp.com/send/?phone=994552034333">
                  <Image src={Whatsapp} alt="whatsapp" />
                </Link>
                <Link href="https://www.instagram.com/luxurytravel.az/">
                  <Image src={Instagram} alt="instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["footer-content-bottom"]}>
          <span>© 2024 — Nihad Hemidov</span>
          <span>Privacy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer