import React, { CSSProperties, FC, HTMLAttributes } from "react";
import styles from "./BaseInput.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  value?: string;
}

const BaseInput: FC<InputProps> = ({ style, ...rest }) => {
  return <input {...rest} className={styles.baseInput} required />;
};

export default BaseInput;
