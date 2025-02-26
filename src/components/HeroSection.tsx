import image1 from "../assets/images/image-1.jpg";
import image4 from "../assets/images/image-4.jpg";
import image9 from "../assets/images/image-9.jpg";

const HeroSection = () => {
  return (
    <div className="flex gap-4 px-14 py-2 ">
      <div>
        <img src={image1} alt="" className="w-[500px] h-80 object-cover mb-4 "/>
        <p className="font-bold text-[#292929]"> EMRACE BOLD ELEGANCE WITH <br /> GAUCHERE'S DARING EDGE</p>
      </div>
      <div>
        <img src={image9} alt="" className="w-[500px] h-[500px] object-cover" />
      </div>
      <div className="mt-44">
        <img src={image4} alt="" className="w-[500px] h-80 object-cover"/>
      </div>
    </div>
  );
};

export default HeroSection;
