import { FC } from "react";
import profileIcon from "@assets/profileIcon.png";
import styles from "./Profile.module.scss";

import Footer from "../../common/footer/Footer";
import ProgramSection from "./ProgramSection";

const Profile: FC = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.profileLogo} src={profileIcon} alt="" />
          <h1>My silcode profile</h1>
        </div>
        <ProgramSection />
      </div>
      {/* <Footer />   */}
    </section>
  );
};

export default Profile;
