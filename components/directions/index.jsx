import React from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import TransparentButton from '../TransparentButton';

import Maldivs from "@/assets/Maldivs.svg";
import Turkey from "@/assets/Turkey.svg";
import Doha from "@/assets/Doha.svg";
import Dubai from "@/assets/Dubai.svg";
import Tbilisi from "@/assets/Tbilisi.svg";
import Singapur from "@/assets/Singapur.svg";
import Italy from "@/assets/Italy.svg";
import China from "@/assets/China.svg";
import Barcelona from "@/assets/Barcelona.svg";
import { useTranslations } from 'next-intl';

const Directions = () => {
  const t = useTranslations("CountriesComponent");
  const directionCards = [
    {
      image: Maldivs,
      title: t("Maldivs"),
    },
    {
      image: Turkey,
      title: t("Turkey"),
    },
    {
      image: Doha,
      title: "Doha",
    },
    {
      image: Dubai,
      title: t("Dubai"),
    },
    {
      image: Tbilisi,
      title: "Tbilisi",
    },
    {
      image: Singapur,
      title: t("Singapur"),
    },
    {
      image: Italy,
      title: t("Italia"),
    },
    {
      image: China,
      title: t("China"),
    },
    {
      image: Barcelona,
      title: t("Barcelona"),
    },
  ];
  return (
    <div className={styles.directions} id="directions">
      {directionCards.map((directionCard, index) => {
        return (
          <div key={index} className={styles["direction-card"]}>
            <div className={styles["direction-card-image"]}>
              <Image src={directionCard.image} alt="country" />
            </div>
            <div className={styles["direction-card-desc"]}>
              <h3>{directionCard.title}</h3>
              <TransparentButton/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Directions