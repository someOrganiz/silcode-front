import { FC } from "react";
import styles from "./HelpCard.module.css";

interface CardProps {
  img: string;
  h3: string;
  p: string;
}

const HelpCard: FC<CardProps> = ({ img, h3, p }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={img} alt="" />
      </div>
      <h3>{h3}</h3>
      <p>{p}</p>
    </div>
  );
};

export default HelpCard;
