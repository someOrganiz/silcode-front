import React from "react";
import Spoiler from "./Spoiler";
import styles from "./Course.module.scss";
import python from "@assets/python.png";

const Course = () => {
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <img src={python} alt="python img" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus
          amet eius voluptates aliquam quam magnam optio animi eveniet repellat
          rerum quisquam sunt aspernatur eligendi veritatis voluptatibus id, in
          sed!
        </p>
      </div>
      <div className={styles.container}>
        <Spoiler
          title={"1. Введение"}
          linkToMedia={"Видео"}
          linkToText={"Документ"}
        />
        <Spoiler
          title={"2. Переменные"}
          linkToMedia={"Видео"}
          linkToText={"Документ"}
        />
        <Spoiler
          title={"3. Условные операторы"}
          linkToMedia={"Видео"}
          linkToText={"Документ"}
        />
        <Spoiler
          title={"4. Циклы"}
          linkToMedia={"Видео"}
          linkToText={"Документ"}
        />
        <Spoiler
          title={"5. Структуры данных"}
          linkToMedia={"Видео"}
          linkToText={"Документ"}
        />
        <Spoiler
          title={"6. Алгоритмы"}
          linkToMedia={"Видео"}
          linkToText={"Документ"}
        />
      </div>
    </div>
  );
};

export default Course;
