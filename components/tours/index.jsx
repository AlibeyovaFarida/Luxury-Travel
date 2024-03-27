import React from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import TarvelLocations from '../../assets/Travel Location.svg'
import { useTranslations } from 'next-intl'
const Tours = () => {
  const t = useTranslations("ToursComponents");
  const toursStatistics = [
    {
      id: 1,
      count: "1500+",
      title: t("statistic1"),
    },
    {
      id: 2,
      count: "200K+",
      title: t("statistic2"),
    },
    {
      id: 3,
      count: "70K+",
      title: t("statistic3"),
    },
    {
      id: 4,
      count: "120K+",
      title: t("statistic4"),
    },
  ];
  return (
    <div className={styles.tours} id="tours">
      <div className={styles["tours-wrapper"]}>
        <div className={styles["tours-wrapper-image"]}>
          <Image src={TarvelLocations} alt="Travel locations" />
        </div>
      </div>
      <div className={styles["tours-desc"]}>
        <div className={styles["tours-about"]}>
          <h4>{t("title")}</h4>
          <h2>{t("subtitle")}</h2>
          <p>{t("description")}</p>
        </div>
        <div className={styles["tours-statistics"]}>
          {toursStatistics.map((statistic) => {
            return (
              <div className={styles["statistic-card"]} key={statistic.id}>
                <div className={styles["statistic-data"]}>
                  <h2>{statistic.count}</h2>
                  <h4>{statistic.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tours;