import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import new1 from "../assets/images/new-1.png";
import new2 from "../assets/images/new-2.png";
import new3 from "../assets/images/new-3.png";
import Image10 from "../assets/images/image-10.jpg";
import Image11 from "../assets/images/image-11.jpg";
import Image12 from "../assets/images/image-12.jpg";
const Arrivals = () => {
    const clothingItems = [
        {
            id: 1,
            name: "TECHNICAL NYLON WIDE TANK TOP",
            price: 790.0,
            imageUrl: new1,
            thumbnailUrl: Image12,
        },
        {
            id: 2,
            name: "SILK TURTLENECK TOP",
            price: 650.0,
            imageUrl: new2,
            thumbnailUrl: Image10,
        },
        {
            id: 3,
            name: "OVERSIZED TECHNICAL NYLON PARKA",
            price: 1490.0,
            imageUrl: new3,
            thumbnailUrl: Image11,
        },
    ];
    return (_jsxs("div", { className: "container px-12 mb-44", children: [_jsxs("div", { className: "flex justify-between items-center mb-8", children: [_jsx("h1", { className: "text-7xl font-black tracking-tighter", children: "NEW ARRIVALS" }), _jsxs("a", { href: "#", className: "text-lg uppercase flex items-center", children: ["SEE ALL", _jsx("svg", { className: "w-5 h-5 ml-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14 5l7 7m0 0l-7 7m7-7H3" }) })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-14", children: clothingItems.map((item) => (_jsxs("div", { className: "flex flex-col left", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "w-[360px] md:h-[450px] bg-gray-200", children: _jsx("img", { src: item.imageUrl, alt: item.name, className: "h-[450px] w-[360px] object-cover" }) }), item.thumbnailUrl && (_jsx("div", { className: "absolute top-0 -right-1 w-[100px] h-[100px] md:w-[160px] md:h-[202px] ", children: _jsx("img", { src: item.thumbnailUrl, alt: `${item.name} thumbnail`, className: "w-[160px] h-[202px] object-cover" }) }))] }), _jsxs("div", { className: "mt-3 text-left", children: [_jsx("h3", { className: "text-md font-bold uppercase ", children: item.name }), _jsxs("p", { className: "text-md font-medium mt-1", children: [item.price.toLocaleString("en-US", {
                                            minimumFractionDigits: 2,
                                        }), "\u20AC"] })] })] }, item.id))) })] }));
};
export default Arrivals;
