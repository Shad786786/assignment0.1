import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white px-3">
      <div className="absolute top-6 right-10 ">
    <button onClick={() => navigate('/dashboard')} className="bg-gradient-to-br from-[#2D0555]/40 via-[#3F0E90]/50 to-[#00AEEF]/60  text-white px-3 py-1.5 rounded-lg shadow-md hover:bg-gray-800 transition">
      {"Dashboard"}
    </button>
  </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className={`w-full ${isLogin ? 'max-w-sm' : 'max-w-md'} bg-gradient-to-b from-sky-200 via-white to-white backdrop-blur-md rounded-2xl shadow-lg p-8 transition-all duration-300`}
      >
        
        <div className="flex justify-center mb-6">
          <div className="bg-blue-200 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">
          {isLogin ? "Sign in with email" : "Create an Account"}
        </h2>

        <div className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-blue-600 hover:underline"
                
              >
                Login
              </button>
            </p>
          )}
        </div>

        <form className="space-y-4 mt-6">
          {!isLogin && (
            <Input placeholder="Full Name" type="text" className="bg-gray-100" />
          )}
          <Input placeholder="Email" type="email" className="bg-gray-100" />
          <div className="relative">
            <Input placeholder="Password" type="password" className="bg-gray-100" />
            {isLogin && (
              <button type="button" className="absolute right-3 top-2 text-sm text-blue-600 hover:underline">
                Forgot password?
              </button>
            )}
          </div>
          {!isLogin && (
            <Input placeholder="Confirm Password" type="password" className="bg-gray-100" />
          )}

          <Button type="submit" className="w-full bg-black text-white text-lg hover:opacity-90">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>

        <div className="mt-6 text-center text-gray-500 text-sm">Or sign in with</div>
        <div className="flex justify-center mt-4 space-x-4">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <img src="images/icons8-google.svg" alt="Google" className="w-15 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <img src="images/icons8-facebook-logo.svg" alt="Facebook" className="w-15 h-5" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <img src="images/icons8-apple.svg" alt="Apple" className="w-15 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
