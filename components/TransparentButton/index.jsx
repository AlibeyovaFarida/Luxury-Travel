'use client'
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import Popup from '../popup';
import styles from './style.module.scss'
const TransparentButton = ({ country }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = useTranslations("TransparentButtonComponent");
    const showModal = () => {
      setIsModalOpen(true);
    };
  return (
    <>
      <button className={styles["transparent-button"]} onClick={showModal}>
        {t("title")}
      </button>
      {isModalOpen && (
        <Popup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} country={country} />
      )}
    </>
  );
}

export default TransparentButton