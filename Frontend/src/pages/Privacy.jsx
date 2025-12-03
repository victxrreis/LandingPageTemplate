/* --- PAGE: PRIVACY POLICY --- */
import React from "react";

export default function Privacy() {
  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Política de Privacidade
        </h1>
        <p className="text-gray-500 mb-12">
          Vigência a partir de: 01 de Janeiro de 2025
        </p>

        <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
          <p className="font-medium bg-gray-50 p-6 rounded-xl border border-gray-200">
            Sua privacidade é nossa prioridade. Este documento explica como
            coletamos, usamos e protegemos seus dados pessoais ao utilizar a
            plataforma Titulo do Site.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1. Coleta de Dados
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. Uso das Informações
            </h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. Compartilhamento com Terceiros
            </h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
