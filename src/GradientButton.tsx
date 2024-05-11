import React, { useState } from "react";
import "./ButtonStyles.css";

const GradientButton: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative ${
        clicked ? "rounded-full" : "rounded-lg"
      } bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-white font-semibold transition duration-300 ease-in-out`}
    >
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : clicked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        "Click Me"
      )}
    </button>
  );
};

export default GradientButton;
