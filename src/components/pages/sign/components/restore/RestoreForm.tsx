import { FC } from "react";
import styles from "./RestoreForm.module.scss";
import logo from "@assets/logo/SilCodeHorizontal.jpg";

const RestoreForm: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.imgContainer}>
        <img src={logo} alt="" />
      </div>
      <form className={styles.form} action="">
        <p>
          Enter your user account's verified email address and we will send you
          a password reset link.
        </p>
        <input type="email" placeholder="Enter your email" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RestoreForm;
