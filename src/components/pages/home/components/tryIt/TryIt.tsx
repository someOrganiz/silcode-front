import { FC } from "react";
import styles from "./TryIt.module.css";
import TryItForm from "./TryItForm";
import video from "../../../../../assets/video.mp4";

const TryIt: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.textContainer}>
        <h4>Попробуйте нашe введение к курсу, это бесплатно!</h4>
        <p>
          Срок пробного периода — 2 недели, кредитная или дебетовая карта не
          нужны
        </p>
      </div>

      <TryItForm />
      <div className={styles.videoContainer}>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default TryIt;
