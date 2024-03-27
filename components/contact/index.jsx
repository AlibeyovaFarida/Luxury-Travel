import React from 'react'
import styles from './style.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import Location from '@/assets/location-icon.svg'
import Phone from "@/assets/phone-icon.svg";
import Mail from "@/assets/mail-icon.svg";
import Clock from "@/assets/clock-icon.svg";
import Instagram from "@/assets/instagram-icon.svg";
const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles["contact-data"]}>
        <div className={styles["contact-data-text"]}>
          <h4>Əlaqə</h4>
          <h2>Bizimlə Əlaqə Saxlayın</h2>
          <p>
            Sualınız varsa, bizə müraciət etməkdən çəkinməyin. Sizinlə əlaqə
            saxlayaraq səyahət planlarınızı daha rahat və xoş edə bilərik.
          </p>
        </div>
        <ul className={styles["contact-links"]}>
          <li>
            <Image src={Location} alt="location"/>
            <span>Mehdi Mehdizade 8, Baku, Azerbaijan</span>
          </li>
          <li>
            <Image src={Phone} alt="phone"/>
            <span>+994 (55) 203-43-33 & (012) 496-75-84</span>
          </li>
          <li>
            <Link href="mailto:info@luxurytravel.az">
              <Image src={Mail} alt="mail"/>
              <span>info@luxurytravel.az</span>
            </Link>
          </li>
          <li>
            <Image src={Clock} alt="clock"/>
            <span>Hər gün saat 08:00 dan 00:00 kimi</span>
          </li>
          <li>
            <Link href={"https://www.instagram.com/luxurytravel.az/"}>
              <Image src={Instagram} alt="instagram"/>
              <span>luxurytravel.az</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.location}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.299911318976!2d49.85913757604727!3d40.38004515787116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d045ac55555%3A0xfdd6f38e977537ac!2sLuxury%20Travel%20Baku!5e0!3m2!1saz!2saz!4v1710023217582!5m2!1saz!2saz"
          width="100%"
          height="100%"
          style={{border:"0"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact