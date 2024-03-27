import Image from "next/image";
import TickIcon from "@/assets/tick-circle.svg";
import styles from "./style.module.scss";
import GoldButton from "../GoldButton";
import FormComponent from "../form";
import { useTranslations } from "next-intl";
const MainComponent = () => {
  const t = useTranslations("MainComponent")
  return (
    <>
      <div className={styles.main} id="main">
        <div className={styles["company-desc"]}>
          <h1 className={styles.motto}>
            {t("mottoFirstSentence")}{" "}
            <span className={styles.gold}>Luxury Travel</span>{" "}
            {t("mottoSecondSentence")}
          </h1>
          <ul className={styles["advantages-list"]}>
            <li className={styles.advantage}>
              <Image src={TickIcon} alt="tick-icon" />
              <h4>{t("advantage1")}</h4>
            </li>
            <li className={styles.advantage}>
              <Image src={TickIcon} alt="tick-icon" />
              <h4>{t("advantage2")}</h4>
            </li>
            <li className={styles.advantage}>
              <Image src={TickIcon} alt="tick-icon" />
              <h4>{t("advantage3")}</h4>
            </li>
            <li className={styles.advantage}>
              <Image src={TickIcon} alt="tick-icon" />
              <h4>{t("advantage4")}</h4>
            </li>
          </ul>
        </div>
        <div className={styles["modal-button"]}>
          <GoldButton />
        </div>
      </div>
      <FormComponent />
    </>
  );
};

export default MainComponent;
