import { FC } from "react";
import InterestingCard from "./InterestingCard";
import styles from "./Interesting.module.css";

const Interesting: FC = () => {
  return (
    <div className={styles.main}>
      <h4>Интересные факты</h4>
      <p className={styles.subtitle}>Немного фактов из мира IT</p>
      <div className={styles.container}>
        <InterestingCard
          percent={1}
          text={"11 языков программирования из 8500 используют программисты"}
        />
        <InterestingCard
          percent={90}
          text={"90% всех программистов моложе 45 лет."}
        />
        <InterestingCard
          percent={65}
          text={"65% программистов имеют зарплату ВЫШЕ 160.000 р."}
        />
      </div>
    </div>
  );
};

export default Interesting;
