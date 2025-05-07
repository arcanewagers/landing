import React from "react";

const Card = ({ children, className = "", hoverEffect = true }) => {
  return (
    <div
      className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 
        ${
          hoverEffect
            ? "transition-all duration-300 hover:bg-gray-700/50 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
            : ""
        } 
        ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
