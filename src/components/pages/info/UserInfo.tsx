import React from "react";
import UserInfoForm from "./UserInfoForm";
import styles from "./UserInfo.module.css";

const UserInfo = () => {
  return (
    <div className={styles.wrapper}>
      <p>Before proceeding, please fill in your information</p>
      <UserInfoForm />
    </div>
  );
};

export default UserInfo;
