import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../index";
import menuImg from "@assets/menu-icon.png";
import { HOME, SIGNIN, SIGNUP } from "@utils/routes";
import { observer } from "mobx-react-lite";
import { PROFILE } from "../../utils/routes";
import styles from "./Header.module.scss";
import DropDown from "./dropDaown/DropDown";

const NavBar = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);

  const logout = () => {
    store.logout();
  };
  const { store } = useContext(Context);

  return (
    <>
      <ul className={click ? styles.navOptionsActive : styles.navOptions}>
        {/* <li className={styles.li}>
          <button className={styles.link}>LANG</button>
        </li> */}
        <li className={styles.li}>
          <NavLink className={styles.link} to={HOME}>
            ABOUT
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink className={styles.link} to={HOME}>
            COURSES
          </NavLink>
        </li>
        {store.isAuth ? (
          <>
            <li className={styles.li}>
              <NavLink className={styles.link} to={PROFILE}>
                PROFILE
              </NavLink>
            </li>
            <li className={styles.li} onClick={logout}>
              <NavLink className={styles.link} to={HOME}>
                SIGN OUT
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className={styles.li}>
              <NavLink className={styles.link} to={SIGNIN}>
                SIGN IN
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink className={styles.link} to={SIGNUP}>
                SIGN UP
              </NavLink>
            </li>
          </>
        )}
      </ul>

      <div className="mobile-menu">
        <button className={styles.button} onClick={handleClick}>
          <img className={styles.image2} src={menuImg} alt="menu" />
        </button>
      </div>
    </>
  );
};

export default observer(NavBar);
