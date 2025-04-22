import ImagesContainer from "./components/imagesContainer";
import Main from "./components/main"; 
import OpeningHours from "./components/openingHours";
import SliderSection from "./components/slider";

export default function Home() {
  return (
    <div> 
      <Main />
      <SliderSection />
      <OpeningHours/>
      <ImagesContainer />
    </div>
  );
}
