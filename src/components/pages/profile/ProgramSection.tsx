import React from "react";
import CourseCard from "../home/components/courses/CourseCard";
import cpp from "@assets/c++Img.png";
import python from "@assets/python.png";
import styles from "./ProgramSection.module.scss";
import { observer } from "mobx-react-lite";

const ProgramsSection = () => {
  {
    /* this component is wrong i think...*/
  }
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h5>MY COURSES</h5>
        <ul className={styles.container}>
          <li>
            <CourseCard
              title={"Основы программирования на языке С++"}
              img={cpp}
              link={"/course"}
            />
          </li>
          <li>
            <CourseCard title={"Python"} img={python} link={"/course"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default observer(ProgramsSection);
