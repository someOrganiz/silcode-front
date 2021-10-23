import { FC } from "react";
import styles from "./Programs.module.css";
import ProgramCard from "./ProgramCard";
import code from "../../../../../assets/codeImg.jpeg";
import matlab from "../../../../../assets/matlabImg.png";
import cpp from "../../../../../assets/c++Img.png";
import python from "../../../../../assets/python.png";

const Programs: FC = () => {
  return (
    <div className={styles.main}>
      <h2>Программы обучения</h2>
      <p className={styles.subtitle}>
        В данном разделе представлены направления обучения, которые Вы можете
        выбрать
      </p>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <ProgramCard
            title={"Основы программирования на языке С++"}
            img={cpp}
            link={""}
          />
          <ProgramCard title={"Python"} img={python} link={""} />
          <ProgramCard title={"MatLab"} img={matlab} link={""} />
          <ProgramCard
            title={"МЫ РАЗРАБАТЫВАЕМ ДОПОЛНИТЕЛЬНЫЕ КУРСЫ ДЛЯ ВАС"}
            img={code}
            link={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Programs;
