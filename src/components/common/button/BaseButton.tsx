import React, { FC, HTMLAttributes } from "react";
import styles from "./BaseButton.module.scss";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
}

const BaseButton: FC<ButtonProps> = ({ text, disabled, ...rest }) => {
  if (disabled)
    return (
      <button {...rest} className={styles.baseButton} disabled>
        wait
      </button>
    );
  else
    return (
      <button {...rest} className={styles.baseButton}>
        {text}
      </button>
    );
};

export default BaseButton;
