import styles from './style.module.scss'

const ServicesCard = ({service}) => {
  return (
    <div className={styles["services-card"]}>
      <div>
        <h4 className={styles["card-title"]}>{service.title}</h4>
        <p className={styles["card-desc"]}>{service.description}</p>
      </div>
      <h2 className={styles["card-number"]}>{service.number}</h2>
    </div>
  );
}

export default ServicesCard