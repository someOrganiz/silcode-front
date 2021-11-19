import { FC } from "react";
import styles from "./CourseSection.module.css";
import CourseCard from "./CourseCard";
import code from "../../../../../assets/codeImg.jpeg";
import matlab from "../../../../../assets/matlabImg.png";
import cpp from "../../../../../assets/c++Img.png";
import python from "../../../../../assets/python.png";

const CourseSection: FC = () => {
  return (
    <section className={styles.main}>
      <h2>Программы обучения</h2>
      <p className={styles.subtitle}>
        В данном разделе представлены направления обучения, которые Вы можете
        выбрать
      </p>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <CourseCard
            title={"Основы программирования на языке С++"}
            img={cpp}
            link={""}
          />
          <CourseCard title={"Python"} img={python} link={""} />
          <CourseCard title={"MatLab"} img={matlab} link={""} />
          <CourseCard
            title={"МЫ РАЗРАБАТЫВАЕМ ДОПОЛНИТЕЛЬНЫЕ КУРСЫ ДЛЯ ВАС"}
            img={code}
            link={""}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
