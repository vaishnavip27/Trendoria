import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
import image1 from "../assets/images/image-1.jpg";
import image2 from "../assets/images/image-2.jpg";
const Newsletter = () => {
    return (_jsxs("section", { className: "px-4 md:px-12 py-8 mx-auto mb-44", children: [_jsx("div", { className: "mb-8", children: _jsx("h1", { className: "text-7xl font-black tracking-tighter", children: "SUBSCRIBE TO NEWSLETTER" }) }), _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "flex-1/2", children: _jsx("img", { src: image1, alt: "", className: "w-full md:w-[700px] h-[988px] object-cover" }) }), _jsxs("div", { className: "flex-1/2", children: [_jsx("img", { src: image2, alt: "", className: "w-full md:w-[700px] h-[800px] object-cover mb-6" }), _jsx("h3", { className: "tracking-tighter text-3xl font-bold opacity-80 mb-2", children: "VERSATILITY PERSONALITY" }), _jsx("p", { className: "font-normal max-w-sm opacity-70 mb-3", children: "STAY AHEAD WITH TRENDORIA, JOIN OUR NEWSLETTER FOR EXCLUSIVE UPDATES ON NEW ARRIVALS AND SPECIAL OFFERS" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "border-2 border-black px-6 py-1 w-xs opacity-30", children: _jsx("input", { type: "email", value: "YOUREMAIL.COM", id: "email" }) }), _jsx("div", { className: "border-2 border-black p-1 opacity-30", children: _jsx(ArrowUpRight, {}) })] })] })] })] }));
};
export default Newsletter;
