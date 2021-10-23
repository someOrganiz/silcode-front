import { FC } from "react";
import { NavLink } from "react-router-dom";
import style from "./CreateOrSignIn.module.scss";

interface CompProps {
  text: string;
  link: string;
  linkName: string;
}

const ForgotOrNew: FC<CompProps> = ({ text, link, linkName }) => {
  return (
    <div className={style.main}>
      <p>{text}</p>
      <NavLink className={style.link} to={link}>
        {linkName}
      </NavLink>
    </div>
  );
};

export default ForgotOrNew;
