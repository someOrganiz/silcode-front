import { HOME } from "@utils/routes";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Welcome.module.css";

const WelcomeSection: FC = () => {
  return (
    <section className={styles.bgImg}>
      <div className={styles.container}>
        <h1>Welcome to SilCode</h1>
        <h3>we are glad to see you here</h3>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <NavLink className={styles.link} to={HOME}>
              Wanna start
            </NavLink>
          </div>
          <div className={styles.button}>
            <NavLink className={styles.link} to={HOME}>
              About learning
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
