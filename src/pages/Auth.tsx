import image3 from "../assets/images/image-3.jpg";
import { FcGoogle } from "react-icons/fc";

const AuthPage = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden h-screen w-full">
      <div className="flex-1 border border-black h-full">
        <img src={image3} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 border border-black h-full flex item-center justify-center">
        <div className="w-3/5 h-auto border border-gray p-4 flex flex-col items-center">
          <span className="text-4xl font-bold tracking-tighter mb-20">
            Trendoria
          </span>
          <div className="flex flex-col justify-center">
            <span className="text-4xl font-bold tracking-tighter mb-3">
              Welcome to Trendoria : Elevate Your Style
            </span>
            <span className="text-sm mb-6">
              Sign up to start your fashion journey with Trendoria
            </span>
            <button className="flex items-center justify-center gap-2 border border-black py-2 rounded-md mb-6">
              <FcGoogle size={20} />
              <span className="text-sm">Sign in with Google</span>
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
