import React from "react";

import image1 from "../assets/images/image-1.jpg";
import image2 from "../assets/images/image-2.jpg";
import image3 from "../assets/images/image-3.jpg";
import image4 from "../assets/images/image-4.jpg";

const About: React.FC = () => {
  return (
    <section className="relative container mx-auto px-8 mb-32">
      {/* Header */}
      <div className="flex justify-between items-center mb-24 relative z-10">
        <h1 className="text-[80px] font-black tracking-tighter leading-none">
          ABOUT US
        </h1>
        <a
          href="#"
          className="text-sm uppercase flex items-center hover:opacity-70 transition-opacity"
        >
          DISCOVER MORE
          <span className="ml-2">→</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        {/* Left Column - Images */}
        <div className="relative h-[600px]">
          <div className="absolute left-0 top-30 z-10">
            <img
              src={image3}
              alt="Model in black turtleneck"
              className="w-[360px] h-[500px] object-cover"
            />
          </div>
          <div className="absolute right-10 top-0">
            <img
              src={image4}
              alt="Model sitting"
              className="w-[360px] h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Right Column - Text and Number */}
        <div className="relative pt-12">
          <p className="text-sm uppercase leading-tight max-w-[300px] mb-8 font-semibold text-gray-700">
            GAUCHERE COMBINES EXPERT CRAFTSMANSHIP WITH A COMMITMENT TO
            SUSTAINABILITY AND MODERN DESIGN.
          </p>
          <span className="absolute right-0 top-0 text-[200px] font-bold text-gray-100 select-none">
            38
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Text */}
          <div className="relative">
            <p className="text-sm font-semibold uppercase leading-tight max-w-[300px] text-gray-700">
              GAUCHERE IS A FRENCH PRÊT-À-PORTER HOUSE FOUNDED IN PARIS BY
              DESIGNER MARIE-CHRISTINE STATZ
            </p>
          </div>

          {/* Right Column - Images */}
          <div className="relative h-[600px] -mt-36">
            <div className="absolute right-0 top-0">
              <img
                src={image1}
                alt="Model posing"
                className="w-[360px] h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-20 left-20">
              <img
                src={image2}
                alt="Fashion detail"
                className="w-[360px] h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background "AUTHENTIC" text layer */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 overflow-hidden ">
        <h2 className="text-[240px] font-black tracking-tighter text-gray-200 whitespace-nowrap select-none ">
          AUTHENTIC
        </h2>
      </div>
    </section>
  );
};

export default About;
