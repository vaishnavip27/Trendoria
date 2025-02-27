import React from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import image1 from "../../assets/images/image-1.jpg";

const Footer = () => {
  const menuItems = [
    ["COLLECTIONS", "SHOP", "CONTACT US"],
    ["STORY", "SUSTAINABILITY", "ABOUT US"],
    ["HIGHLIGHTS", "READY TO WEAR", "ACCESSORIES"],
  ];
  return (
    <section className="relative overflow-hidden">
      <div className="px-4 md:px-12 py-8 flex items-center justify-between mb-80">
        <div className="flex items-center gap-12 ">
          {menuItems.map((column, index) => (
            <ul key={index}>
              {column.map((item, idx) => (
                <li
                  key={idx}
                  className="hover:text-gray-500 cursor-pointer text-sm font-semibold opacity-80"
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <Instagram />
            <Twitter />
            <Linkedin />
          </div>
          <div className="flex items-center gap-1">
            <img src={image1} alt="" className="w-20 h-28" />
            <img src={image1} alt="" className="w-20 h-28" />
            <img src={image1} alt="" className="w-20 h-28" />
          </div>
        </div>
      </div>

      <h3 className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-[243px] font-black tracking-tighter leading-none m-0 p-0">TRENDORIA</h3>
    </section>
  );
};

export default Footer;
