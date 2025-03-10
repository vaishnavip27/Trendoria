import React from "react";
import image3 from "../../assets/images/image-3.jpg";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden h-screen w-full">
      <div className="flex-1 h-full">
        <img src={image3} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 h-full flex item-center justify-center">
        <div className="max-w-md h-auto  p-4 flex flex-col items-center">
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
            <button className="flex items-center justify-center gap-2 border border-gray-400 py-2 rounded-md mb-6">
              <FcGoogle size={20} />
              <span className="text-sm">Sign in with Google</span>
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>
            <div className="flex flex-col justify-center space-y-4 ">
              <div className="grid w-full max-w-md items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="py-5"
                />
              </div>
              <div className="grid w-full max-w-md items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="py-5"
                />
              </div>
              <div className="grid w-full max-w-md items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="py-5"
                />
              </div>

              <button className="text-sm bg-black text-white py-3 rounded-md mt-1">
                Create Account
              </button>

              <span className="text-sm">
                Already have an account?{" "}
                <Link to="/login" className="underline">
                  Login Here
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
