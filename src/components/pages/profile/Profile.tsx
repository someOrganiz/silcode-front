import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import profileIcon from "@assets/profileIcon.png";
import styles from "./Profile.module.scss";
import ProgramsSection from "./ProgramSection";
import TripCard from "./testFolder/TripCard";

import python from "@assets/python.png";
import MIT from "./testFolder/MIT.jpeg";
import Footer from "../../common/footer/Footer";
import CourseCard from "../home/components/courses/CourseCard";
import ProgramSection from "./ProgramSection";

const Profile: FC = () => {
  return (
    <section className={styles.main}>
      <img className={styles.profileLogo} src={profileIcon} alt="" />
      <h1>My silcode profile!</h1>
      <ProgramSection />
      <Footer />
    </section>
  );
};

export default observer(Profile);
