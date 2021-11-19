import { FC } from "react";
import AdvantageSection from "./components/advantages/AdvantageSection";
import Footer from "../../common/footer/Footer";
import HelpSection from "./components/help/HelpSection";
import FactSection from "./components/facts/FactSection";
import CourseSection from "./components/courses/CourseSection";
import TrySection from "./components/try/TrySection";
import WelcomeSection from "./components/welcome/WelcomeSection";

const Home: FC = () => {
  return (
    <div>
      <WelcomeSection />
      <AdvantageSection />
      <HelpSection />
      <FactSection />
      <CourseSection />
      <TrySection />
      <Footer />
    </div>
  );
};

export default Home;
