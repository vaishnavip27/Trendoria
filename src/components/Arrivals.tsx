import React from "react";

import new1 from "../assets/images/new-1.png";
import new2 from "../assets/images/new-2.png";
import new3 from "../assets/images/new-3.png";
import Image10 from "../assets/images/image-10.jpg";
import Image11 from "../assets/images/image-11.jpg";
import Image12 from "../assets/images/image-12.jpg";

interface ClothingItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  thumbnailUrl?: string;
}

const Arrivals: React.FC = () => {
  const clothingItems: ClothingItem[] = [
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

  return (
    <div className="container px-12 mb-44">
      {/* Title & See All Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-7xl font-black tracking-tighter">NEW ARRIVALS</h1>
        <a href="#" className="text-lg uppercase flex items-center">
          SEE ALL
          <svg
            className="w-5 h-5 ml-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>

      {/* Clothing Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        {clothingItems.map((item) => (
          <div key={item.id} className="flex flex-col left">
            {/* Product Image */}
            <div className="relative">
              <div className="w-[360px] md:h-[450px] bg-gray-200">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-[450px] w-[360px] object-cover"
                />
              </div>

              {/* Thumbnail Image */}
              {item.thumbnailUrl && (
                <div className="absolute top-0 -right-1 w-[100px] h-[100px] md:w-[160px] md:h-[202px] ">
                  <img
                    src={item.thumbnailUrl}
                    alt={`${item.name} thumbnail`}
                    className="w-[160px] h-[202px] object-cover"
                  />
                </div>
              )}
            </div>

            {/* Product Info - Outside the Background */}
            <div className="mt-3 text-left">
              <h3 className="text-md font-bold uppercase ">
                {item.name}
              </h3>
              <p className="text-md font-medium mt-1">
                {item.price.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                })}
                €
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arrivals;
