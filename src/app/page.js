import Favorite from "./components/Favorite";
import About from "./components/About";
import Accordian from "./components/Accordian";
import JoinNow from "./components/JoinNow";
import FeaturesPecock from "./components/FeaturesPecock";

export default function Home() {
  return (
    <>
      <FeaturesPecock />
      <Favorite />
      <About />
      <Accordian />
      <JoinNow />
    </>
  );
}
