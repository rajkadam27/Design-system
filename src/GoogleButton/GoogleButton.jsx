// src/components/GoogleButton.jsx
import React from "react";

const GoogleButton = ({ text, onClick, variant }) => {
  const baseClass =
    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  };

  return (
    <button className={`${baseClass} ${styles[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default GoogleButton;
