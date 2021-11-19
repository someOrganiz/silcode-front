import React from "react";
import styles from "./DropDown.module.scss";

const DropDown = () => {
  return (
    <div className={styles.dropdown}>
      Dropdown
      {/* <button className={styles.dropbtn}>Dropdown</button> */}
      <div className={styles.dropdownContent}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};

export default DropDown;
