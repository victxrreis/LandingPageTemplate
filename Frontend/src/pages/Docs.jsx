import React, { useState } from "react";
import { BookOpen, FileText, Code, ChevronDown, ChevronUp } from "lucide-react";

export default function Docs() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId],
    }));
  };

  const docsData = [
    {
      id: "quick-start",
      icon: BookOpen,
      title: "Guia de Início Rápido",
      summary: "Aprenda a configurar sua conta...",
      details: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      id: "manuals",
      icon: FileText,
      title: "Manuais de Uso",
      summary: "Documentação detalhada...",
      details: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
    {
      id: "api-ref",
      icon: Code,
      title: "Referência da API",
      summary: "Documentação técnica completa...",
      details: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
    },
  ];

  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* --- ELEMENT: PAGE HEADER --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Documentação
          </h1>
          <p className="text-gray-600 text-lg">
            Tudo o que você precisa para configurar, usar e escalar.
          </p>
        </div>

        {/* --- ELEMENT: ACCORDION LIST --- */}
        <div className="flex flex-col gap-6">
          {docsData.map((doc) => {
            const isExpanded = expandedCards[doc.id];
            const Icon = doc.icon;

            return (
              /* --- COMPONENT: DOC CARD --- */
              <div
                key={doc.id}
                className={`border rounded-2xl p-6 md:p-8 transition-all duration-300 bg-white ${
                  isExpanded
                    ? "border-green-200 shadow-md"
                    : "border-gray-200 hover:shadow-lg hover:border-gray-300"
                }`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`p-4 rounded-xl shrink-0 transition-colors duration-300 ${
                      isExpanded ? "bg-green-50" : "bg-gray-100"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 transition-colors duration-300 ${
                        isExpanded ? "text-green-600" : "text-gray-700"
                      }`}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {doc.summary}
                    </p>

                    {/* --- COMPONENT: EXPANDABLE CONTENT --- */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-gray-100"
                          : "grid-rows-[0fr] opacity-0 h-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                          <span className="w-1.5 h-6 bg-green-500 rounded-full inline-block"></span>
                          Tópicos Cobertos:
                        </h4>
                        <ul className="space-y-3 text-gray-600">
                          {doc.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0"></span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleCard(doc.id)}
                      className={`mt-5 flex items-center gap-2 font-medium transition-colors focus:outline-none group ${
                        isExpanded
                          ? "text-green-700"
                          : "text-green-600 hover:text-green-700"
                      }`}
                    >
                      <span>{isExpanded ? "Mostrar menos" : "Saiba mais"}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
