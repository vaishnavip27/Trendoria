import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import image1 from "../../assets/images/image-1.jpg";
const Footer = () => {
    const menuItems = [
        ["COLLECTIONS", "SHOP", "CONTACT US"],
        ["STORY", "SUSTAINABILITY", "ABOUT US"],
        ["HIGHLIGHTS", "READY TO WEAR", "ACCESSORIES"],
    ];
    return (_jsxs("section", { className: "relative overflow-hidden", children: [_jsxs("div", { className: "px-4 md:px-12 py-8 flex items-center justify-between mb-80", children: [_jsx("div", { className: "flex items-center gap-12 ", children: menuItems.map((column, index) => (_jsx("ul", { children: column.map((item, idx) => (_jsx("li", { className: "hover:text-gray-500 cursor-pointer text-sm font-semibold opacity-80", children: item }, idx))) }, index))) }), _jsxs("div", { className: "flex items-center gap-8", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Instagram, {}), _jsx(Twitter, {}), _jsx(Linkedin, {})] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx("img", { src: image1, alt: "", className: "w-20 h-28" }), _jsx("img", { src: image1, alt: "", className: "w-20 h-28" }), _jsx("img", { src: image1, alt: "", className: "w-20 h-28" })] })] })] }), _jsx("h3", { className: "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-[243px] font-black tracking-tighter leading-none m-0 p-0", children: "TRENDORIA" })] }));
};
export default Footer;
