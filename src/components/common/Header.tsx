import React, { FC } from "react";
import styles from "./Header.module.scss";
import silCodeImg from "@assets/SilCode.png";
import menuImg from "@assets/menu-icon.png";
import { NavLink } from "react-router-dom";
import { SIGNIN, SIGNUP, HOME } from "@utils/routes";

const Header: FC = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <NavLink to={HOME}>
          <img className={styles.image} src={silCodeImg} alt="logo" />
        </NavLink>
      </div>

      <ul className={click ? styles.navOptionsActive : styles.navOptions}>
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
      </ul>

      <div className="mobile-menu">
        <button className={styles.button} onClick={handleClick}>
          <img className={styles.image2} src={menuImg} alt="logo" />
        </button>
      </div>
    </div>
  );
};

export default Header;
