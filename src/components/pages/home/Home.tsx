import { FC } from "react";
import Advantages from "./components/advantages/Advantages";
import Footer from "./components/footer/Footer";
import HelpSection from "./components/help/HelpSection";
import Interesting from "./components/interesting/Interesting";
import Programs from "./components/programs/Programs";
import TryIt from "./components/tryIt/TryIt";
import Welcome from "./components/welcome/Welcome";

const Home: FC = () => {
  return (
    <div>
      <Welcome />
      <Advantages />
      <HelpSection />
      <Interesting />
      <Programs />
      <TryIt />
      <Footer />
    </div>
  );
};

export default Home;
