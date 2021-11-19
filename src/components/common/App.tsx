import { FC, useContext, useEffect } from "react";
import Header from "./Header";
import style from "./App.module.css";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import Footer from "./footer/Footer";

const App: FC = ({ children }) => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  return (
    <div className={style.app}>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default observer(App);
