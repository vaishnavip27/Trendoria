import image3 from "../assets/images/image-3.jpg"

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden h-screen w-full">
      <div className="flex-1 border border-black h-full">
        <img src={image3} alt="" className="w-full h-full object-cover"/>
      </div>
      <div className="flex-1 border border-black h-full flex item-center justify-center">
        <div className="w-3/5 h-auto border border-gray p-4"></div>
      </div>
    </div>
  );
};

export default AuthPage;
