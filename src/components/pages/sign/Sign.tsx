import { FC } from "react";
import style from "./Sign.module.css";
import { SIGNUP, SIGNIN, RESTOREPASSWORD } from "@utils/routes";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";
import RestorePassword from "./components/restore/RestorePassword";

const Sign: FC = () => {
  return (
    <div className={style.wrapper}>
      <Switch>
        <Route path={SIGNIN} component={SignIn} />
        <Route path={SIGNUP} component={SignUp} />
        <Route path={RESTOREPASSWORD} component={RestorePassword} />
      </Switch>
    </div>
  );
};

export default Sign;
