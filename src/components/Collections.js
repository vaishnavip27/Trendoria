import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import image1 from "../assets/images/image-1.jpg";
import image9 from "../assets/images/image-9.jpg";
import image4 from "../assets/images/image-4.jpg";
const collectionsData = [
    {
        id: "fall-2024",
        season: "FALL 2024",
        title: "THE FALL 24 IS FOCUSING OF MODERN FEMININITY",
        description: "",
        imageUrl: image1,
    },
    {
        id: "winter-2024",
        season: "WINTER 2024",
        title: "SPARINGLY CUT, FEMININE YET FLUID, FORMAL YET CASUAL",
        description: "",
        imageUrl: image4,
    },
    {
        id: "spring-2024",
        season: "SPRING 2024",
        title: "THE SOFT-BRIGHT PALETTE WITH TENSION AND HARMONY.",
        description: "",
        imageUrl: image9,
    },
];
const filters = [
    "ALL",
    "FALL 2024",
    "WINTER 2024",
    "SPRING 2024",
    "SUMMER 2024",
    "SPRING SUMMER 2022",
    "FALL WINTER 2021",
];
const Collections = () => {
    const [activeFilter, setActiveFilter] = useState("ALL");
    const filteredCollections = activeFilter === "ALL"
        ? collectionsData
        : collectionsData.filter((collection) => collection.season === activeFilter);
    return (_jsxs("section", { className: "px-4 md:px-12 py-8 mx-auto mb-44", children: [_jsx("div", { className: "mb-8", children: _jsx("h1", { className: "text-5xl md:text-7xl font-black tracking-tighter", children: "COLLECTIONS" }) }), _jsx("div", { className: "flex flex-wrap justify-left gap-2 mb-10", children: filters.map((filter) => (_jsx("button", { onClick: () => setActiveFilter(filter), className: `px-4 py-2 text-sm border border-black transition-colors ${activeFilter === filter
                        ? "bg-black text-white"
                        : "bg-white text-black hover:bg-gray-100"}`, children: filter }, filter))) }), _jsx("div", { className: "space-y-16", children: filteredCollections.map((collection) => (_jsx("div", { className: "border-t-2 border-b-2 border-gray-400 py-8", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 items-start gap-8", children: [_jsx("div", { className: "text-center md:text-left", children: _jsx("h2", { className: "text-2xl md:text-3xl font-sans font-bold tracking-tighter", children: collection.season }) }), _jsx("div", { className: " max-w-xs", children: _jsx("p", { className: "text-sm font-normal", children: collection.title }) }), _jsx("div", { className: "flex justify-center", children: _jsx("img", { src: collection.imageUrl, alt: collection.season, className: "w-full md:w-[280px] h-[320px] object-cover object-center grayscale" }) })] }) }, collection.id))) })] }));
};
export default Collections;
