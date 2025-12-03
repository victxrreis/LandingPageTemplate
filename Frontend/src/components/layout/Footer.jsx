/* --- COMPONENT: FOOTER --- */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Package,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const { pathname } = useLocation();

  const handleLogoClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[rgb(248,250,250)] text-gray-600 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {/* --- ELEMENT: BRAND & COPYRIGHT --- */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="hover:opacity-80 transition-opacity"
            >
              <div className="bg-gray-700 p-2 rounded-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
            </Link>

            {/* COPYRIGHT: Agora limpo e ao lado do logo */}
            <span className="text-sm text-gray-500">© 2025 Titulo do Site</span>
          </div>

          {/* --- ELEMENT: NAVIGATION LINKS --- */}
          <div className="flex flex-wrap justify-center gap-6 text-xs md:text-sm font-medium">
            <Link
              to="/termos"
              className="hover:text-gray-900 hover:underline transition-all"
            >
              Termos
            </Link>
            <Link
              to="/privacidade"
              className="hover:text-gray-900 hover:underline transition-all"
            >
              Privacidade
            </Link>
            <Link
              to="/seguranca"
              className="hover:text-gray-900 hover:underline transition-all"
            >
              Segurança
            </Link>
            <Link
              to="/status"
              className="hover:text-gray-900 hover:underline transition-all"
            >
              Status
            </Link>
            <Link
              to="/docs"
              className="hover:text-gray-900 hover:underline transition-all"
            >
              Docs
            </Link>
            <Link
              to="/contato"
              className="hover:text-gray-900 hover:underline transition-all"
            >
              Contato
            </Link>
          </div>

          {/* --- ELEMENT: SOCIAL ICONS --- */}
          <div className="flex items-center gap-5">
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
