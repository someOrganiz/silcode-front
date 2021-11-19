import { FC } from "react";
import styles from "./TryForm.module.css";

const TryItForm: FC = () => {
  return (
    <div className={styles.main}>
      <h6>Зарегистрируйтесь на первый бесплатный урок!</h6>
      <p>
        Пройдите первый урок, ознакомьтесь с материалами, напишите СВОЙ
        маленький КОД
      </p>
      <form className={styles.inputBox} action="">
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="E-mail" required />
        <input type="tel" required placeholder="Phone" />
        <button
          className={styles.btn}
          onSubmit={() => console.log("something need to add!")}
        >
          Конечно, хочу!
        </button>
        <p>
          Нажимая на кнопку "Конечно, хочу!", Вы подтверждаете согласие на
          обработку персональных данных.
        </p>
      </form>
    </div>
  );
};

export default TryItForm;
