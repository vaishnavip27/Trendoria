import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./components/Header/Navbar";
import Heading from "./components/Heading";
import HeroSection from "./components/HeroSection";
import Arrivals from "./components/Arrivals";
import AboutUs from "./components/AboutUs";
import Collections from "./components/Collections";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Header/Footer";
const App = () => {
    return (_jsxs("div", { className: "bg-[#FFFFFF] font-myfont h-screen w-full overflow-y-auto", children: [_jsx(Navbar, {}), _jsx(HeroSection, {}), _jsx(Heading, {}), _jsx(Arrivals, {}), _jsx(AboutUs, {}), _jsx(Collections, {}), _jsx(Newsletter, {}), _jsx(Footer, {})] }));
};
export default App;
