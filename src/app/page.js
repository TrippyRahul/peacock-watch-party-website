import Favorite from "./components/Favorite";
import Work from "./components/Work";
import Join from "./components/Join";
import About from "./components/About";
import Accordian from "./components/Accordian";
import JoinNow from "./components/JoinNow";
import FeaturesPecock from "./components/FeaturesPecock";

export default function Home() {
  return (
    <>
      <FeaturesPecock />
      <Favorite />
      <Work />
      <Join />
      <About />
      <Accordian />
      <JoinNow />
    </>
  );
}
