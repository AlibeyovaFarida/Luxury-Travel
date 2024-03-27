"use client";
import React, { useState } from "react";
import Popup from "../popup";
import styles from "./style.module.scss";
const GoldButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <button className={styles["gold-button"]} onClick={showModal}>
        Əlaqə Saxlayın
      </button>
      ;
      {isModalOpen && (
        <Popup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default GoldButton;
