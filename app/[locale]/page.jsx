import About from "@/components/about";
import Contact from "@/components/contact";
import Directions from "@/components/directions";
import MainComponent from "@/components/main";
import Popup from "@/components/popup";
import Services from "@/components/services";
import Slider from "@/components/slider";
import Tours from "@/components/tours";

export default function Home() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <MainComponent />
      <Services/>
      <About/>
      <Tours/>
      <Slider/>
      <Directions/>
      <Contact/>
      <Popup/>
    </div>
  );
}
