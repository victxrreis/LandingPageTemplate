/* --- COMPONENT: SERVICE DETAIL SECTION --- */
import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const details = [
  {
    id: "service-1",
    label: "Funcionalidade A",
    title: "Detalhes do Serviço A",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    points: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    imageColor: "bg-gray-50",
  },
  {
    id: "service-2",
    label: "Funcionalidade B",
    title: "Como funciona o Serviço B",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    points: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    imageColor: "bg-gray-100",
  },
  {
    id: "service-3",
    label: "Funcionalidade C",
    title: "Vantagens do Serviço C",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    points: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    imageColor: "bg-gray-200",
  },
];

export default function ServiceDetail() {
  const [activeTab, setActiveTab] = useState(details[0].id);
  const activeContent = details.find((item) => item.id === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* --- ELEMENT: SIDEBAR MENU --- */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">
              Explore os Recursos
            </h3>
            <div className="flex flex-col gap-4">
              {details.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`text-left px-6 py-5 rounded-xl transition-all duration-300 border-l-4 ${
                    activeTab === item.id
                      ? /* CORREÇÃO: Volta para tons de Cinza */
                        "bg-gray-100 border-gray-400 shadow-sm"
                      : "bg-white border-transparent hover:bg-gray-50 text-gray-500"
                  }`}
                >
                  <span
                    className={`block font-bold text-lg mb-1 ${
                      activeTab === item.id ? "text-gray-800" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="text-sm text-gray-500">
                    Clique para ver detalhes
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* --- ELEMENT: CONTENT PANEL --- */}
          <div className="w-full lg:w-2/3">
            <div className="bg-gray-50/50 rounded-3xl p-8 md:p-12 border border-gray-100 animate-fade-in">
              <div
                className={`w-full aspect-video rounded-xl mb-8 ${activeContent.imageColor} flex items-center justify-center text-gray-400 font-medium`}
              >
                [Imagem Ilustrativa do {activeContent.label}]
              </div>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {activeContent.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {activeContent.desc}
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeContent.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
