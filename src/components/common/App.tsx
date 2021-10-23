import { FC } from "react";
import Header from "./Header";
import style from "./App.module.css";

const App: FC = ({ children }) => {
  return (
    <div className={style.app}>
      <Header />
      {children}
    </div>
  );
};

export default App;
