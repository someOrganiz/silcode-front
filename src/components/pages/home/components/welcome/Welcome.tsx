import { HOME } from "@utils/routes";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Welcome.module.css";

const Welcome: FC = () => {
  return (
    <div className={styles.bgImg}>
      <div className={styles.container}>
        <h1>Добро пожаловать в Silcode!</h1>
        <h3>Мы научим Вас программировать!</h3>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <NavLink className={styles.link} to={HOME}>
              Хочу учиться!
            </NavLink>
          </div>
          <div className={styles.button}>
            <NavLink className={styles.link} to={HOME}>
              Об обучении
            </NavLink>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
