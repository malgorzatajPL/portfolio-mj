import Main from "./components/main";
import HamburgerMenu from "./components/navigation/navigation";
import SliderSection from "./components/slider";

export default function Home() {
  return (
    <div>
      <HamburgerMenu />
      <Main />
      <SliderSection />
    </div>
  );
}
