import ReactDOM from "react-dom";
import App from "./components/common/App";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/pages/home/Home";
import {
  HOME,
  SIGNIN,
  SIGNUP,
  RESTOREPASSWORD,
  INFO,
  COURSE,
} from "@utils/routes";
import Sign from "./components/pages/sign/Sign";
import Store from "./store/store";
import { createContext } from "react";
import UserInfo from "./components/pages/info/UserInfo";
import Profile from "./components/pages/profile/Profile";
import { PROFILE } from "./utils/routes";
import Course from "./components/pages/course/Course";
interface IStore {
  store: Store;
}

const store = new Store();
export const Context = createContext<IStore>({ store });
ReactDOM.render(
  <Context.Provider value={{ store }}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route path={SIGNIN} component={Sign} />
          <Route path={SIGNUP} component={Sign} />
          <Route path={RESTOREPASSWORD} component={Sign} />
          <Route path={INFO} component={UserInfo} />
          <Route path={PROFILE} component={Profile} />
          <Route path={COURSE} component={Course} />
          <Redirect to={HOME} />
        </Switch>
      </App>
    </BrowserRouter>
  </Context.Provider>,
  document.getElementById("root")
);
