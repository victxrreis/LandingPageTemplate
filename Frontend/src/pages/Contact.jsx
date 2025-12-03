/* --- PAGE: CONTACT --- */
import React from "react";
import { Mail, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="pt-32 pb-20 bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Fale Conosco
          </h1>
          <p className="text-xl text-gray-600">
            Estamos aqui para ajudar o seu negócio a crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* --- ELEMENT: EMAIL CARD --- */}
          <div className="bg-gray-50 rounded-3xl p-10 text-center border border-gray-200 hover:shadow-lg transition-all group">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
              <Mail className="w-10 h-10 text-gray-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">E-mail</h3>
            <p className="text-gray-500 mb-6">Resposta em até 24 horas</p>
            <a
              href="mailto:contato@email.com"
              className="text-xl font-semibold text-green-600 hover:text-green-700 hover:underline"
            >
              contato@email.com
            </a>
          </div>

          {/* --- ELEMENT: SOCIAL NETWORKS CARD (EXTERNAL LINKS) --- */}
          <div className="bg-gray-50 rounded-3xl p-10 text-center border border-gray-200 hover:shadow-lg transition-all">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Nossas Redes
            </h3>

            <div className="grid grid-cols-2 gap-6 max-w-xs mx-auto">
              {/* WhatsApp */}
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all group border border-transparent hover:border-gray-100"
              >
                <MessageCircle className="w-8 h-8 text-gray-600 group-hover:text-green-600 transition-colors" />
                <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">
                  WhatsApp
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all group border border-transparent hover:border-gray-100"
              >
                <Instagram className="w-8 h-8 text-gray-600 group-hover:text-pink-600 transition-colors" />
                <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">
                  Instagram
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all group border border-transparent hover:border-gray-100"
              >
                <Github className="w-8 h-8 text-gray-600 group-hover:text-black transition-colors" />
                <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">
                  GitHub
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all group border border-transparent hover:border-gray-100"
              >
                <Linkedin className="w-8 h-8 text-gray-600 group-hover:text-blue-700 transition-colors" />
                <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
