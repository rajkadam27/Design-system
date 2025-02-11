import React, { useState } from "react";
import { motion } from "framer-motion";

const SearchBar = ({ placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0.8 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center w-full max-w-lg bg-white border border-gray-300 rounded-full shadow-md px-4 py-2"
    >
      <motion.svg
        initial={{ opacity: 0.6 }}
        animate={isFocused ? { opacity: 1, x: -5 } : { opacity: 0.6, x: 0 }}
        transition={{ duration: 0.3 }}
        className="h-5 w-5 text-gray-500 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 2a6 6 0 104.472 10.472l3.128 3.128a1 1 0 001.415-1.415l-3.128-3.128A6 6 0 008 2zM3 8a5 5 0 119.9 1.032 1 1 0 00-.217.217A5 5 0 013 8z"
          clipRule="evenodd"
        />
      </motion.svg>
      <motion.input
        type="text"
        placeholder={placeholder}
        className="flex-1 outline-none bg-transparent text-gray-700"
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </motion.div>
  );
};

export default SearchBar;
