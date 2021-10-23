import ReactDOM from "react-dom";
import App from "./components/common/App";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/pages/home/Home";
import { HOME, SIGNIN, SIGNUP, RESTOREPASSWORD } from "@utils/routes";
import Sign from "./components/pages/sign/Sign";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route path={SIGNIN} component={Sign} />
        <Route path={SIGNUP} component={Sign} />
        <Route path={RESTOREPASSWORD} component={Sign} />
        <Redirect to={HOME} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);
