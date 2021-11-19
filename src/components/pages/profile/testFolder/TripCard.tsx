import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./TripCard.module.scss";

interface CardProps {
  title: string;
  img: string;
  to: string;
}

const TripCard: FC<CardProps> = ({ img, title, to }) => {
  return (
    <div>
      <a href={to} className={styles.a}>
        <p>{title}</p>
        <img src={img} alt="trip image link" />
      </a>
    </div>
  );
};

export default TripCard;
