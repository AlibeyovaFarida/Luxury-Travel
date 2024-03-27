'use client'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import styles from './style.module.scss'
const Navbar = () => {
  const t = useTranslations("HeaderComponent");
   const handleClick = (event, id) => {
     event.preventDefault();
     const element = document.getElementById(id);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };
  return (
    <div className={styles.navbar}>
      <ul className={styles["navbar-list"]}>
        <li className={styles["list-item"]}>
          <Link href={"#"} onClick={(event) => handleClick(event, "main")}>
            {t("navbarItem1")}
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href={"#"} onClick={(event) => handleClick(event, "services")}>
            {t("navbarItem2")}
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href={"#"} onClick={(event) => handleClick(event, "about")}>
            {t("navbarItem3")}
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href={"#"} onClick={(event) => handleClick(event, "tours")}>
            {t("navbarItem4")}
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link
            href={"#"}
            onClick={(event) => handleClick(event, "directions")}
          >
            {t("navbarItem5")}
          </Link>
        </li>
        <li className={styles["list-item"]}>
          <Link href={"#"} onClick={(event) => handleClick(event, "contact")}>
            {t("navbarItem6")}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar