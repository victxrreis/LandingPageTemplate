/* --- COMPONENT: NAVBAR --- */
import React, { useState } from "react";
import { Menu, X, Package } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  /* --- LOGIC: CURRENT PATH CHECK --- */
  const { pathname } = useLocation();

  /* --- LOGIC: LOGO CLICK HANDLER --- */
  const handleLogoClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* --- ELEMENT: LOGO / BRAND --- */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="bg-gray-700 p-2 rounded-lg">
              <Package className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 tracking-tight">
              Titulo do Site
            </span>
          </Link>

          {/* --- ELEMENT: DESKTOP MENU --- */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#features"
              className="text-gray-600 hover:text-gray-800 font-medium transition"
            >
              Recursos
            </a>
            <a
              href="/#pricing"
              className="text-gray-600 hover:text-gray-800 font-medium transition"
            >
              Preços
            </a>
            <a
              href="/#about"
              className="text-gray-600 hover:text-gray-800 font-medium transition"
            >
              Sobre
            </a>

            {/* CTA Button */}
            <a href="/#pricing">
              <Button variant="primary" className="py-2 px-4 text-sm">
                Começar Agora
              </Button>
            </a>
          </div>

          {/* --- ELEMENT: MOBILE MENU TOGGLE --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-800"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- ELEMENT: MOBILE DRAWER --- */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <a
              href="/#features"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md"
            >
              Recursos
            </a>
            <a
              href="/#pricing"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md"
            >
              Preços
            </a>
            <a
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-md"
            >
              Sobre
            </a>
            <div className="pt-4">
              <a href="/#pricing" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full justify-center">
                  Começar Agora
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
