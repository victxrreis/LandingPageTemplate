/* --- COMPONENT: PRICING SECTION --- */
import React from "react";
import Button from "../ui/Button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Plano Inicial",
    price: "R$ 99",
    period: "/mês",
    desc: "Para quem está começando.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    isPopular: false,
  },
  {
    name: "Plano Intermediário",
    price: "R$ 199",
    period: "/mês",
    desc: "A melhor escolha para crescer.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    isPopular: true,
  },
  {
    name: "Plano Avançado",
    price: "R$ 299",
    period: "/mês",
    desc: "Para grandes operações.",
    features: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* --- ELEMENT: SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Nossos Planos
          </h2>
          <p className="text-lg text-gray-600">
            Escolha a opção ideal para o seu momento. Sem taxas escondidas,
            cancele quando quiser.
          </p>
        </div>

        {/* --- ELEMENT: PRICING CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                plan.isPopular
                  ? "border-green-500 shadow-xl scale-105 z-10 bg-white"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-md bg-gray-50/50"
              }`}
            >
              {/* --- ELEMENT: POPULAR BADGE --- */}
              {plan.isPopular && (
                /* MUDANÇA: 
                   - text-gray-800 (Mesma cor do preço)
                   - Removido style de textShadow
                */
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-gray-800 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Recomendado
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm">{plan.desc}</p>
              </div>

              <div className="mb-8">
                {/* A cor abaixo (text-gray-800) é a referência que usamos para o badge acima */}
                <span className="text-4xl font-extrabold text-gray-800">
                  {plan.price}
                </span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600 text-sm"
                  >
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.isPopular ? "primary" : "outline"}
                className="w-full justify-center"
              >
                Escolher este Plano
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
