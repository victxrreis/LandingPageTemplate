/* --- COMPONENT: BUTTON UI --- */
import React from "react";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  /* --- STYLE: BASE SHARED STYLES --- */
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  /* --- STYLE: COLOR VARIANTS --- */
  const variants = {
    // Primary: Fundo Cinza Chumbo (Ação Principal)
    primary:
      "bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-500 shadow-sm hover:shadow-md",

    // Outline: Borda Cinza (Ação Secundária)
    outline:
      "border-2 border-gray-300 text-gray-700 hover:border-gray-700 hover:text-gray-800 bg-transparent",

    // Text: Apenas Link (Ação Terciária)
    text: "text-gray-600 hover:text-gray-800 px-4 hover:bg-gray-50",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
