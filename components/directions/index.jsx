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
      country: "Maldives",
    },
    {
      image: Turkey,
      title: t("Turkey"),
      country: "Turkey",
    },
    {
      image: Doha,
      title: t("Doha"),
      country: "Qatar",
    },
    {
      image: Dubai,
      title: t("Dubai"),
      country: "United Arab Emirates",
    },
    {
      image: Tbilisi,
      title: t("Tbilisi"),
      country: "Georgia",
    },
    {
      image: Singapur,
      title: t("Singapur"),
      country: "Singapore",
    },
    {
      image: Italy,
      title: t("Italia"),
      country: "Italy",
    },
    {
      image: China,
      title: t("China"),
      country: "China",
    },
    {
      image: Barcelona,
      title: t("Barcelona"),
      country: "Spain",
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
              <TransparentButton country={directionCard.country} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Directions