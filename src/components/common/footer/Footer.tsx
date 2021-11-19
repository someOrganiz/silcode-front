import { FC } from "react";
import FooterColumn from "./FooterColumn";
import styles from "./Footer.module.css";
import silCode from "@assets/SilCodeWhite.png";
import { HOME } from "@utils/routes";

const Footer: FC = () => {
  const firstColumn = {
    "Домашняя страница": HOME,
    Отзывы: HOME,
    Курсы: HOME,
  };

  const secondColumn = {
    Компания: HOME,
    Контакты: HOME,
    Блог: HOME,
    Инвестирование: HOME,
  };

  const thirdColumn = {
    "База знаний": HOME,
    "Видео туториалы": HOME,
    Разработчикам: HOME,
  };

  return (
    <footer className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img src={silCode} alt="logo.img" />
        </div>
        <FooterColumn title={"ПРОДУКТ"} linksObj={firstColumn} />
        <FooterColumn title={"О SILCODE"} linksObj={secondColumn} />
        <FooterColumn title={"ПОМОЩЬ"} linksObj={thirdColumn} />
      </div>
    </footer>
  );
};

export default Footer;
