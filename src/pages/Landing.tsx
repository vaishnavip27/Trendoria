import Navbar from "../components/Header/Navbar";
import Heading from "../components/Heading";
import HeroSection from "../components/HeroSection";
import Arrivals from "../components/Arrivals";
import AboutUs from "../components/AboutUs";
import Collections from "../components/Collections";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Header/Footer";

const LandingPage = () => {
  return (
    <div className="bg-[#FFFFFF] font-myfont h-screen w-full overflow-y-auto">
      <Navbar />
      <HeroSection />
      <Heading />
      <Arrivals />
      <AboutUs />
      <Collections />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;
