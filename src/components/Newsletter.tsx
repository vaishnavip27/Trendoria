import React from "react";
import { ArrowUpRight } from "lucide-react";
import image1 from "../assets/images/image-1.jpg";
import image2 from "../assets/images/image-2.jpg";

const Newsletter = () => {
  return (
    <section className="px-4 md:px-12 py-8 mx-auto mb-44">
      <div className="mb-8">
        <h1 className="text-7xl font-black tracking-tighter">
          SUBSCRIBE TO NEWSLETTER
        </h1>
      </div>

      <div className="flex items-start gap-6">
        <div className="flex-1/2">
          <img
            src={image1}
            alt=""
            className="w-full md:w-[700px] h-[988px] object-cover"
          />
        </div>
        <div className="flex-1/2">
          <img
            src={image2}
            alt=""
            className="w-full md:w-[700px] h-[800px] object-cover mb-6"
          />
          <h3 className="tracking-tighter text-3xl font-bold opacity-80 mb-2">
            VERSATILITY PERSONALITY
          </h3>
          <p className="font-normal max-w-sm opacity-70 mb-3">
            STAY AHEAD WITH TRENDORIA, JOIN OUR NEWSLETTER FOR EXCLUSIVE UPDATES
            ON NEW ARRIVALS AND SPECIAL OFFERS
          </p>
          <div className="flex items-center gap-2">
            <div className="border-2 border-black px-6 py-1 w-xs opacity-30">
              <input type="email" value="YOUREMAIL.COM" id="email" />
            </div>
            <div className="border-2 border-black p-1 opacity-30">
              <ArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
