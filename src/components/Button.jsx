import React from "react";

const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  fullWidth = false,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-5 py-2.5 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-md hover:shadow-lg focus:ring-purple-500",
    secondary:
      "bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-lg focus:ring-teal-500",
    outline:
      "bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500/10 focus:ring-purple-500",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
