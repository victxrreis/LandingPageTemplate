/* --- COMPONENT: FEATURES GRID --- */
import React from "react";
import { Layers, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Serviço 01",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: Users,
    title: "Serviço 02",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    icon: Zap,
    title: "Serviço 03",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* --- ELEMENT: SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Nossos Principais Serviços
          </h2>
          <p className="text-lg text-gray-600">
            Subtítulo explicativo. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Abaixo, os pilares da nossa solução.
          </p>
        </div>

        {/* --- ELEMENT: CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            /* --- ELEMENT: FEATURE CARD --- */
            /* CORREÇÃO: Hover volta a ser cinza (gray-300) */
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors duration-300">
                <item.icon className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
