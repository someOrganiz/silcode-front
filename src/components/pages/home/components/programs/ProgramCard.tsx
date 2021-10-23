import { FC } from "react";
import styles from "./ProgramCard.module.css";

interface CardProps {
  title: string;
  img: string;
  link: string;
}

const ProgramCard: FC<CardProps> = ({ title, img, link }) => {
  return (
    <a className={styles.main} href={link}>
      <img className={styles.image} src={img} alt="" />
      <div className={styles.contentWrapper}>
        <h4>{title}</h4>
        <div className={styles.buttonContainer}>
          <button className={styles.btn}></button>
        </div>
      </div>
    </a>
  );
};

export default ProgramCard;
