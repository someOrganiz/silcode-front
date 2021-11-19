import React, { FC } from "react";
import styles from "./Header.module.scss";
import silCodeImg from "@assets/logo/SilCode.png";

import { NavLink, useHistory } from "react-router-dom";
import { HOME } from "@utils/routes";
import { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import NavBar from "./NavBar";

const Header: FC = () => {
  const { store } = useContext(Context);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to={HOME}>
          <img className={styles.image} src={silCodeImg} alt="logo" />
        </NavLink>
      </div>
      {store.isLoading ? <></> : <NavBar />}
    </header>
  );
};

export default observer(Header);
