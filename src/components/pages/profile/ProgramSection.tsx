import React from "react";
import CourseCard from "../home/components/courses/CourseCard";
import cpp from "@assets/c++Img.png";
import python from "@assets/python.png";
import mit from "@assets/MIT-1.jpg";
import styles from "./ProgramSection.module.scss";
import { observer } from "mobx-react-lite";

const ProgramsSection = () => {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <h4>My courses</h4>
        <ul className={styles.container}>
          <li>
            <CourseCard
              title={"Основы программирования на языке С++"}
              img={cpp}
              link={""}
            />
          </li>
          <li>
            <CourseCard title={"Python"} img={python} link={""} />
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h4>My trips</h4>
        <ul className={styles.container}>
          <li>
            <CourseCard title={"MIT"} img={mit} link={""} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default observer(ProgramsSection);
