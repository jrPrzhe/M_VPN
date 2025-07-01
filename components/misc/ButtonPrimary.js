import React from "react";

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button
      className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;