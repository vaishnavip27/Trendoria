import React, { useState } from "react";
import image3 from "../../assets/images/image-3.jpg";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  AuthError 
} from "firebase/auth";
import { auth, googleProvider, db } from "../../firebase";
import { toast } from "react-toastify";
import { doc, getDoc, setDoc } from "firebase/firestore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully"); 
      toast.success("User Logged in Successfully", {position: "top-center"});
      window.location.href = "/homepage";
    } catch (err) {
      const error = err as AuthError;
      console.log(error.message);
      setError(error.message);
      toast.error(error.message, { position: "bottom-center" });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      // Check if this Google user exists in your database
      const userDocRef = doc(db, "Users", user.uid);
      const userDoc = await getDoc(userDocRef);
      
      // If user doesn't exist, create a new user document
      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          email: user.email,
          name: user.displayName || "Google User",
          createdAt: new Date(),
        });
      }
      
      console.log("User logged in with Google successfully");
      toast.success("Google Sign-in Successful", {position: "top-center"});
      window.location.href = "/homepage";
    } catch (err) {
      const error = err as AuthError;
      console.log(error.message);
      setError(error.message);
      toast.error(error.message, { position: "bottom-center" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center overflow-hidden h-screen w-full"
    >
      <div className="flex-1 h-full">
        <img
          src={image3}
          alt="Fashion banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 h-full flex items-center justify-center">
        <div className="max-w-md p-6 flex flex-col items-center">
          <span className="text-4xl font-bold tracking-tighter mb-12">
            Trendoria
          </span>
          <div className="flex flex-col justify-center w-full">
            <span className="text-2xl font-semibold text-center mb-3">
              Welcome to Trendoria: Elevate Your Style
            </span>
            <span className="text-sm text-gray-600 text-center mb-6">
              Log in to start your fashion journey with Trendoria
            </span>

            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-gray-400 py-2 rounded-md mb-6 w-full"
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <FcGoogle size={20} />
              <span className="text-sm">Log in with Google</span>
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>

            <div className="flex flex-col space-y-4 w-full">
              <div className="grid items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleChange}
                  className="py-2"
                  required
                />
              </div>

              <div className="grid items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleChange}
                  className="py-2"
                  required
                />
              </div>

              {error && <span className="text-red-500 text-sm">{error}</span>}

              <button
                type="submit"
                className="text-sm bg-black text-white py-3 rounded-md mt-2 w-full"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            <span className="text-base tracking-tight mt-4">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-sm underline font-semibold text-purple-800"
              >
                Sign Up Here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;