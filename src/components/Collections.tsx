import React, { useState } from "react";
import image1 from "../assets/images/image-1.jpg";
import image9 from "../assets/images/image-9.jpg";
import image4 from "../assets/images/image-4.jpg";

type Collection = {
  id: string;
  season: string;
  title: string;
  description: string;
  imageUrl: string;
};

const collectionsData: Collection[] = [
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

const Collections: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredCollections =
    activeFilter === "ALL"
      ? collectionsData
      : collectionsData.filter(
          (collection) => collection.season === activeFilter
        );

  return (
    <section className="px-4 md:px-12 py-8 mx-auto mb-44">
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
          COLLECTIONS
        </h1>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-left gap-2 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm border border-black transition-colors ${
              activeFilter === filter
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Collections */}
      <div className="space-y-16">
        {filteredCollections.map((collection) => (
          <div
            key={collection.id}
            className="border-t-2 border-b-2 border-gray-400 py-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-8">
              {/* Season */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-tighter">
                  {collection.season}
                </h2>
              </div>

              {/* Title */}
              <div className=" max-w-xs">
                <p className="text-sm font-normal">{collection.title}</p>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={collection.imageUrl}
                  alt={collection.season}
                  className="w-full md:w-[280px] h-[320px] object-cover object-center grayscale"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
