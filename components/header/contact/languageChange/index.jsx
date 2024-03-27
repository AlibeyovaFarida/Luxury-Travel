import Image from "next/image";
import ArrowDown from "@/assets/arrow-down.svg";
import styles from "./style.module.scss";
const LanguageChange = () => {
  return (
    <div className={styles["language-change"]}>
      <button value={"AZ"} className={styles['selected-language']}>
        <span>AZ</span>
        <Image src={ArrowDown} alt="arrow-down"/>
      </button>
      <button value={"EN"} className={styles["unselected-language"]}>EN</button>
    </div>
  );
};

export default LanguageChange;
