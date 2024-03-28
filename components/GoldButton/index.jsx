"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Popup from "../popup";
import styles from "./style.module.scss";
const GoldButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("GoldButtonComponent");
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <button className={styles["gold-button"]} onClick={showModal}>
        {t("title")}
      </button>
      ;
      {isModalOpen && (
        <Popup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default GoldButton;
