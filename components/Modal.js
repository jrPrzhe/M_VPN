import React from "react";

export default function Modal({ onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div
        style={{ backgroundColor: "#C0C0C0" }}
        className="rounded-lg p-8 w-full max-w-md mx-auto relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}