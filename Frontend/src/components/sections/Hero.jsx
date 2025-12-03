import React from "react";
import Button from "../ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-white">
      {/* --- ELEMENT: BACKGROUND DECORATION --- */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white -z-10"></div>

      <div className="container mx-auto px-4 text-center">
        {/* --- ELEMENT: HIGHLIGHT BADGE --- */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-semibold mb-8">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
          Texto de Destaque Pequeno
        </div>

        {/* --- ELEMENT: HEADLINE --- */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 tracking-tight mb-8 leading-tight">
          Título Principal do <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">
            Seu Site Aqui
          </span>
        </h1>

        {/* --- ELEMENT: SUBTITLE --- */}
        <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10 leading-relaxed">
          Subtítulo descritivo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>

        {/* --- ELEMENT: CTA BUTTONS --- */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a href="#pricing">
            <Button variant="primary" className="text-lg px-8 py-4 gap-2">
              Ver Planos e Preços <ArrowRight className="w-5 h-5" />
            </Button>
          </a>

          <a href="#features">
            <Button variant="outline" className="text-lg px-8 py-4">
              Conhecer Recursos
            </Button>
          </a>
        </div>

        {/* --- ELEMENT: BENEFITS LIST --- */}
        <div className="flex flex-col md:flex-row justify-center gap-6 text-green-700 text-sm font-medium">
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle2 className="w-5 h-5 text-green-600" /> Benefício 1
          </div>
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle2 className="w-5 h-5 text-green-600" /> Benefício 2
          </div>
          <div className="flex items-center gap-2 justify-center">
            <CheckCircle2 className="w-5 h-5 text-green-600" /> Benefício 3
          </div>
        </div>
      </div>
    </section>
  );
}
