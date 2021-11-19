import React, { FC } from "react";
import AdvantagesCard from "./AdvantageCard";
import styles from "./AdvantageSection.module.css";
import zoomImg from "@assets/homePage/peopleZoom.jpg";
import compImg from "@assets/homePage/notebookIMG.jpeg";
import confImg from "@assets/homePage/videoConf.png";
import { LEFT, RIGHT } from "@utils/constants";

const AdvantageSection: FC = () => {
  const [renderKey, setRenderKey] = React.useState<string>(RIGHT);

  function handleResize() {
    if (window.innerWidth <= 1125) {
      setRenderKey(LEFT);
    } else {
      setRenderKey(RIGHT);
    }
  }

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  window.onload = () => {
    handleResize();
  };

  return (
    <section className={styles.container}>
      <AdvantagesCard
        direction={LEFT}
        img={zoomImg}
        h3={"Занятия с преподавателями"}
        text={
          "Уроки ведут практикующие специалисты с опытом в разработке языков программирования."
        }
      />
      <AdvantagesCard
        direction={renderKey}
        img={compImg}
        h3={"Практические задания"}
        text={
          "Следите за задачами, над которыми вы ежедневно работаете и анализируйте Ваши достижения, доводя их до совершенства каждую секунду!"
        }
      />
      <AdvantagesCard
        direction={LEFT}
        img={confImg}
        h3={"Коммуникация с наставником"}
        text={
          "Онлайн-дискуссии и чат с преподавателем позволяют Вам коммуницировать и всегда отвечать на Ваши вопросы."
        }
      />
    </section>
  );
};

export default AdvantageSection;
