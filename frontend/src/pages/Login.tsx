/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-1 justify-center items-center text-center p-5">
      <img
        src="src/assets/mindfullnessSectionImage.svg"
        alt="Holistic Wellness"
        className="w-96 h-auto absolute bottom-0 left-0 z-[-1]"
      />
      <img
        src="src/assets/journalIntro.svg"
        alt="Holistic Wellness"
        className="w-96 h-auto absolute top-0 right-0 z-[-1]"
      />
      <div className="flex justify-center items-center h-full">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-96 text-center border-2 border-[#f4ece3] relative opacity-80">
          <h2 className="text-2xl font-bold mb-4 ">Login to Mira</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-left font-semibold text-gray-700">
                Username or Email
              </label>
              <input
                type="text"
                placeholder="Enter your username or email"
                className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-left font-semibold text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-2.5 text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                navigate("/home");
              }}
              className="w-full bg-blue-500 text-white p-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
          <div className="absolute -top-4 right-4 text-green-500 text-3xl">
            ✨
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
