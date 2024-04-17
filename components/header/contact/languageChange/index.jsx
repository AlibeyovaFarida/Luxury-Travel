"use client"

import Image from "next/image";
import ArrowDown from "@/assets/arrow-down.svg";
import styles from "./style.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
const LanguageChange = () => {
  const [isOpen, setIsOpen] = useState(false)
  const localeActive = useLocale()
  const [lang, setLang] = useState(localeActive.toUpperCase());
  const router = useRouter();
  const handleChange = () => {
    setIsOpen(!isOpen)
  }
  const onSelectChange = (e) => {
    const nextLocale = e.target.value
      router.replace(`/${nextLocale}`)
  }
  return (
    <div className={styles["language-change"]}>
      <button
        value={"az"}
        onClick={handleChange}
        className={
          isOpen
            ? `${styles["selected-language"]} ${styles["active"]}`
            : `${styles["selected-language"]}`
        }
      >
        <span>{lang}</span>
        <Image src={ArrowDown} alt="arrow-down" />
      </button>
      <div
        className={
          isOpen
            ? `${styles["dropdown"]} ${styles["show"]}`
            : `${styles["dropdown"]}`
        }
      >
        <button
          value={"en"}
          className={
            lang == "EN"
              ? `${styles["unselectable-language"]}`
              : `${styles["selectable-language"]}`
          }
          onClick={(e) => {
            setLang("EN");
            handleChange();
            onSelectChange(e)
          }}
        >
          EN
        </button>
        <button
          value={"az"}
          className={
            lang == "AZ"
              ? `${styles["unselectable-language"]}`
              : `${styles["selectable-language"]}`
          }
          onClick={(e) => {
            setLang("AZ");
            handleChange();
            onSelectChange(e)
          }}
        >
          AZ
        </button>
        <button
          value={"ru"}
          className={
            lang == "RU"
              ? `${styles["unselectable-language"]}`
              : `${styles["selectable-language"]}`
          }
          onClick={(e) => {
            setLang("RU");
            handleChange();
            onSelectChange(e)
          }}
        >
          RU
        </button>
      </div>
    </div>
  );
};

export default LanguageChange;
