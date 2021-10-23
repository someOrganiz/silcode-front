import style from "./SignForm.module.scss";
import logo from "@assets/SilCodeLogoHorizontal.jpg";
import { FC } from "react";
import { RESTOREPASSWORD, SIGNIN } from "@utils/routes";
import { NavLink } from "react-router-dom";
interface FormProp {
  title: string;
  route: string;
}

const SignForm: FC<FormProp> = ({ title, route }) => {
  return (
    <div className={style.main}>
      <div className={style.imgContainer}>
        <img src={logo} alt="" />
      </div>

      <h6 className={style.title}>{title}</h6>
      <form className={style.form} action="">
        <p>Email</p>
        <input type="email" />
        {route === SIGNIN ? (
          <div className={style.passwordLine}>
            <p>Password</p>
            <NavLink className={style.link} to={RESTOREPASSWORD}>
              Forgot password?
            </NavLink>
          </div>
        ) : (
          <p>Password</p>
        )}
        <input type="password" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignForm;
