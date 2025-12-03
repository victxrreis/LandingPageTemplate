import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* --- ELEMENT: TEXT BLOCK --- */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              Sobre Nós
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              Construindo soluções que <br />
              <span className="text-gray-500">impulsionam o futuro.</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-800">Missão Focada</h4>
                  <p className="text-sm text-gray-500">
                    Entregar valor real através de tecnologia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- ELEMENT: VISUAL BLOCK --- */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] bg-gray-200 rounded-3xl flex items-center justify-center text-gray-400 font-medium text-lg">
                [Imagem da Equipe ou Escritório]
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -left-4 md:-left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <span className="text-3xl font-bold text-green-600">
                      +5k
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      Clientes Satisfeitos
                    </p>
                    <p className="text-xs text-gray-400">Em todo o mundo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
