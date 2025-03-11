import React, { useState } from "react";
import image3 from "../../assets/images/image-3.jpg";
import { FcGoogle } from "react-icons/fc";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  AuthError 
} from "firebase/auth";
import { auth, googleProvider, db } from "../../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignupPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError(""); // Clear previous errors

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: formData.name,
          createdAt: new Date(),
        });
      }
      console.log("User signed up successfully:", userCredential.user);
      toast.success("User Registered Successfully", { position: "top-center" });
      window.location.href = "/homepage"; // Redirect to homepage after successful signup
    } catch (err) {
      const error = err as AuthError;
      console.log(error.message);
      setError(error.message); // Update the error state
      toast.error(error.message, { position: "bottom-center" });
    } finally {
      setLoading(false); // Reset loading state whether signup succeeds or fails
    }
  };

  const handleGoogleSignUp = async () => {
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
        toast.success("New account created with Google", { position: "top-center" });
      } else {
        toast.info("Logged in with existing Google account", { position: "top-center" });
      }
      
      console.log("User signed up/in with Google successfully");
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

  return (
    <div className="flex items-center justify-center overflow-hidden h-screen w-full">
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
              Sign up to start your fashion journey with Trendoria
            </span>

            <button
              type="button"
              className="flex items-center justify-center gap-2 border border-gray-400 py-2 rounded-md mb-6 w-full"
              onClick={handleGoogleSignUp}
              disabled={loading}
            >
              <FcGoogle size={20} />
              <span className="text-sm">Sign up with Google</span>
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>

            <form
              onSubmit={handleSignup}
              className="flex flex-col space-y-4 w-full"
            >
              <div className="grid items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="py-2"
                  required
                />
              </div>

              <div className="grid items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
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
                  value={formData.password}
                  onChange={handleChange}
                  className="py-2"
                  required
                />
                <span className="text-xs text-gray-500">
                  Password must be at least 6 characters
                </span>
              </div>

              {error && <span className="text-red-500 text-sm">{error}</span>}

              <button
                type="submit"
                className="text-sm bg-black text-white py-3 rounded-md mt-2 w-full"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <span className="text-base tracking-tight mt-4">
              Already have an account?{" "}
              <Link
                to="/login"
                className="underline text-sm font-semibold text-purple-800"
              >
                Login Here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;