import { useTranslations } from "next-intl";
import ServicesCard from "./servicesCard";
import styles from "./style.module.scss";
const Services = () => {
  const t = useTranslations("ServicesComponent");
  const t1 = useTranslations("ServicesCardComponent")
  const servicesData = [
    {
      title: t1("title1"),
      description: t1("description1"),
      number: "01",
    },
    {
      title: t1("title2"),
      description: t1("description2"),
      number: "02",
    },
    {
      title: t1("title3"),
      description: t1("description3"),
      number: "03",
    },
    {
      title: t1("title4"),
      description: t1("description4"),
      number: "04",
    },
    {
      title: t1("title5"),
      description: t1("description5"),
      number: "05",
    },
    {
      title: t1("title6"),
      description: t1("description6"),
      number: "06",
    },
  ];
  return (
    <div className={styles.services} id="services">
      <h4 className={styles["services-title"]}>{t("title")}</h4>
      <h2 className={styles["services-motto"]}>{t("description")}</h2>
      <div className={styles["services-list"]}>
        {servicesData.map((service, index) => {
          return <ServicesCard service={service} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Services;
