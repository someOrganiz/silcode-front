import { FC } from "react";
import styles from "./AdvantageCard.module.css";
import { LEFT } from "../../../../../utils/constants";

interface CardProps {
  direction: string;
  img: string;
  h3: string;
  text: string;
}

const AdvantagesCard: FC<CardProps> = ({ direction, img, h3, text }) => {
  return (
    <div className={styles.main}>
      {direction === LEFT ? (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img src={img} alt="" />
          </div>
          <div className={styles.textContainer}>
            <h3>{h3}</h3>
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h3>{h3}</h3>
            <p>{text}</p>
          </div>
          <div className={styles.imgContainer}>
            <img src={img} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvantagesCard;
