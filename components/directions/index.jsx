import React from 'react'
import Image from 'next/image'
import styles from './style.module.scss'
import { directionCards } from '@/mock/directionCards';
import TransparentButton from '../TransparentButton';


const Directions = () => {
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