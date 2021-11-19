import React from "react";
import BaseButton from "../../../components/common/button/BaseButton";
import BaseInput from "../../../components/common/input/BaseInput";
import BaseRadioInput from "../../../components/common/input/BaseRadioInput";
import styles from "./UserInfoForm.module.scss";
import { NavLink } from "react-router-dom";
import { PROFILE } from "@utils/routes";

const UserInfoForm = () => {
  return (
    <form className={styles.form}>
      <p>Name</p>
      <BaseInput name="name" type="text" />
      <p>Second name</p>
      <BaseInput name="secondName" type="text" />
      <p>Date of birth</p>
      <BaseInput name="birthday" type="date" />
      <p>Sex</p>
      <div>
        <BaseRadioInput name="sex" id="Male" />
        <BaseRadioInput name="sex" id="Feemale" />
        <BaseRadioInput name="sex" id="Other" />
      </div>
      <BaseButton text="Submit" />
      <NavLink to={PROFILE}>Skip {"->"}</NavLink>
    </form>
  );
};

export default UserInfoForm;
