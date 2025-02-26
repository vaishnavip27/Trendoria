import Navbar from "./components/Header/Navbar";
import Heading from "./components/Heading";
import HeroSection from "./components/HeroSection";
import Arrivals from "./components/Arrivals";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <div className="bg-[#FFFFFF] font-myfont h-screen w-full overflow-y-auto">
      <Navbar />
      <HeroSection/>
      <Heading/>
      <Arrivals/>
      <AboutUs/>
    </div>
  );
};

export default App;
