import style from "./SignForm.module.scss";
import logo from "@assets/logo/SilCodeHorizontal.jpg";
import { FC, FormEventHandler, useContext, useState } from "react";
import { RESTOREPASSWORD, SIGNIN } from "@utils/routes";
import { NavLink, useHistory } from "react-router-dom";
import BaseInput from "../../../../common/input/BaseInput";
import BaseButton from "../../../../common/button/BaseButton";
import { Context } from "../../../../../index";
import { observer } from "mobx-react-lite";
import { PROFILE, INFO } from "@utils/routes";
interface FormProp {
  title: string;
  route: string;
}

interface Credentials {
  email: string;
  password: string;
}

const SignForm: FC<FormProp> = ({ title, route }) => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const { store } = useContext(Context);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setIsLoading(true);
    if (route === SIGNIN) {
      store.login(credentials.email, credentials.password);

      history.push(PROFILE);
    } else {
      store.registration(credentials.email, credentials.password);
      setIsLoading(false);
    }
  };
  return (
    <div className={style.main}>
      <div className={style.imgContainer}>
        <img src={logo} alt="" />
      </div>

      <h6 className={style.title}>{title}</h6>
      <form className={style.form} action="" onSubmit={handleSubmit}>
        <p>Email</p>
        <BaseInput
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
        />
        {route === SIGNIN ? (
          <div className={style.passwordLine}>
            <p>Password</p>
            <NavLink className={style.link} to={RESTOREPASSWORD} tabIndex={-1}>
              Forgot password?
            </NavLink>
          </div>
        ) : (
          <p>Password</p>
        )}
        <BaseInput
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        {isLoading ? (
          <BaseButton text="Submit" disabled />
        ) : (
          <BaseButton text="Submit" />
        )}
      </form>
    </div>
  );
};

export default observer(SignForm);
