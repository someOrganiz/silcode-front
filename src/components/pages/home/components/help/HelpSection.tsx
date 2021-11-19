import { FC } from "react";
import styles from "./HelpSection.module.css";
import HelpCard from "./HelpCard";
import comp from "../../../../../assets/desktopApple.png";
import phone from "../../../../../assets/telephoneApple.png";
import briefcase from "../../../../../assets/briefcaseApple.png";
import womanMac from "../../../../../assets/womanBehindMacApple.png";
import weightLifter from "../../../../../assets/weightLifterApple.png";
import settings from "../../../../../assets/settingsApple.png";

const HelpSection: FC = () => {
  return (
    <section className={styles.main}>
      <h2>Мы поможем вам учиться более эффективно</h2>
      <p>
        Мы предлагаем вам полную свободу действий для создания лучших проектных
        решений
      </p>
      <div className={styles.container}>
        <HelpCard
          img={comp}
          h3={"Учитесь на любом устройстве"}
          p={
            "Уроки проходят на онлайн платформе, поэтому Вы можете всегда и везде прийти на лекцию или урок."
          }
        />
        <HelpCard
          img={phone}
          h3={"Пользуйтесь всеми видами связи c преподавателями"}
          p={
            "Вам дается чат с преподавателем и другими участниками, почта преподавателя, а также личные онлайн встречи с учителем."
          }
        />
        <HelpCard
          img={briefcase}
          h3={"Держите файлы в порядке"}
          p={
            "Вы можете загружать документы и файлы в проекты, борды и дискуссии и делиться ими с коллегами."
          }
        />
        <HelpCard
          img={womanMac}
          h3={"Учитесь в любой точке планеты"}
          p={
            "Сохраняйте связь с учителем и учениками вне зависимости от места положения и коммуницируйте синхронно, не упуская деталей проекта."
          }
        />
        <HelpCard
          img={weightLifter}
          h3={"Получайте ответы на еженедельные отчеты"}
          p={
            "Регулярные отчеты дают понять учителю Ваши достижения. Вы можете использовать советы учителя для анализа своей продуктивности."
          }
        />
        <HelpCard
          img={settings}
          h3={"Используйте интеграции"}
          p={
            "Интегрируйте ваши проекты с другими учениками! Тем самым получите навыки работы в команде."
          }
        />
      </div>
    </section>
  );
};

export default HelpSection;
