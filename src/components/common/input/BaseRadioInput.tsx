import React, { CSSProperties, FC, HTMLAttributes } from "react";
// import styles from "./BaseInput.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  id: string;
}

const BaseRadioInput: FC<InputProps> = ({ style, id, name, ...rest }) => {
  return (
    <label htmlFor={id}>
      <input
        {...rest}
        id={id}
        type="radio"
        name={name}
        // className={styles.baseInput}
        required
      />
      {id}
    </label>
  );
};

export default BaseRadioInput;
