import ImagesContainer from "./components/imagesContainer";
import Main from "./components/main";
import HamburgerMenu from "./components/navigation/navigation"; 
import OpeningHours from "./components/openingHours";
import SliderSection from "./components/slider";

export default function Home() {
  return (
    <div>
      <HamburgerMenu />
      <Main />
      <SliderSection />
      <OpeningHours/>
      <ImagesContainer />
    </div>
  );
}
