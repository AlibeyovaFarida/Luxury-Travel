import Image from 'next/image';
import React from 'react'
import styles from './style.module.scss'
import TickIcon from '@/assets/tick-circle.svg'
import AboutImage from "@/assets/About.svg"
import GoldButton from '../GoldButton';
import { useTranslations } from 'next-intl';
const About = () => {
  const t = useTranslations("AboutComponent");
  const aboutDescAdvantages = [
    t("advantage1"),
    t("advantage2"),
    t("advantage3"),
    t("advantage4"),
    t("advantage5"),
    t("advantage6"),
  ];
  return (
    <div className={styles.about} id="about">
      <div className={styles["about-desc"]}>
        <div className={styles["about-desc-text"]}>
          <h4>{t("title")}</h4>
          <h2>Luxury Travel</h2>
          <p>{t("description")}</p>
        </div>
        <div className={styles["about-desc-advantages"]}>
          <ul className={styles["about-advantages-list"]}>
            {aboutDescAdvantages.map((advantage, index) => {
              return (
                <li className={styles["advantage-item"]} key={index}>
                  <Image src={TickIcon} alt="tick-icon" />
                  <h5>{advantage}</h5>
                </li>
              );
            })}
          </ul>
          <div className={styles["about-company-history"]}>
            <h5>{t("experiencePart1")}</h5>
            <span>13+</span>
            <h5>
              {t("experiencePart2")}
              <br />
              {t("experiencePart3")}
            </h5>
          </div>
        </div>
        <div className={styles["about-desc-suggestion"]}>
          <h4>{t("suggestionTitle")}</h4>
          {/* <button>Əlaqə Saxlayın</button> */}
          <GoldButton />
        </div>
      </div>
      <div className={styles["about-wrapper"]}>
        <Image src={AboutImage} alt="about" />
      </div>
    </div>
  );
}

export default About