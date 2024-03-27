'use client'
import React, { useState } from 'react'
import Popup from '../popup';
import styles from './style.module.scss'
const TransparentButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
  return (
    <>
      <button className={styles["transparent-button"]} onClick={showModal}>
        Öz Təcrübəni Yarat
      </button>
      {isModalOpen && (
        <Popup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
}

export default TransparentButton