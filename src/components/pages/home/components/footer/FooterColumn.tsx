import { FC } from "react";
import styles from "./FooterColumn.module.css";

interface ColumnProps {
  title: string;
  linksObj: object;
}

const FooterColumn: FC<ColumnProps> = ({ title, linksObj }) => {
  return (
    <div className={styles.main}>
      <h6>{title}</h6>
      <div className={styles.linksContainer}>
        {Object.entries(linksObj).map((element) => (
          <a href={element[1]} key={`${element[0]}`}>
            {element[0]}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
