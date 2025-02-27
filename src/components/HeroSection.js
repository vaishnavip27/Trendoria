import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import image1 from "../assets/images/image-1.jpg";
import image4 from "../assets/images/image-4.jpg";
import image9 from "../assets/images/image-9.jpg";
const HeroSection = () => {
    return (_jsxs("div", { className: "flex gap-4 px-14 py-2 ", children: [_jsxs("div", { children: [_jsx("img", { src: image1, alt: "", className: "w-[500px] h-80 object-cover mb-4 " }), _jsxs("p", { className: "font-bold text-[#292929]", children: [" EMRACE BOLD ELEGANCE WITH ", _jsx("br", {}), " GAUCHERE'S DARING EDGE"] })] }), _jsx("div", { children: _jsx("img", { src: image9, alt: "", className: "w-[500px] h-[500px] object-cover" }) }), _jsx("div", { className: "mt-44", children: _jsx("img", { src: image4, alt: "", className: "w-[500px] h-80 object-cover" }) })] }));
};
export default HeroSection;
