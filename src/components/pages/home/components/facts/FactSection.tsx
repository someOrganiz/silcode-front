import { FC } from "react";
import FactCard from "./FactCard";
import styles from "./FactSection.module.css";

const FactSection: FC = () => {
  return (
    <section className={styles.main}>
      <h4>Интересные факты</h4>
      <p className={styles.subtitle}>Немного фактов из мира IT</p>
      <div className={styles.container}>
        <FactCard
          percent={1}
          text={"11 языков программирования из 8500 используют программисты"}
        />
        <FactCard percent={90} text={"90% всех программистов моложе 45 лет."} />
        <FactCard
          percent={65}
          text={"65% программистов имеют зарплату ВЫШЕ 160.000 р."}
        />
      </div>
    </section>
  );
};

export default FactSection;
