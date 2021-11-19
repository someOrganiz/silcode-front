import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import styles from "./FactCard.module.css";

interface CardProps {
  percent: number;
  text: string;
}

const FactCard: FC<CardProps> = ({ percent, text }) => {
  const chartdata = {
    datasets: [
      {
        label: "Markets Monitored",
        backgroundColor: ["#01C2CB", "#B1D3AA"],
        data: [percent, 100 - percent],
      },
    ],
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.canvas}>
          <Doughnut
            data={chartdata}
            options={{
              events: [],
            }}
          />
          <div className={styles.textContainer}>
            <p>{`${percent}%`}</p>
          </div>
        </div>
      </div>
      <p className={styles.subtitle}>{text}</p>
    </div>
  );
};

export default FactCard;
