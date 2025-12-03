/* --- PAGE: SECURITY --- */
import React from "react";
import { Shield, Lock, Server } from "lucide-react";

export default function Security() {
  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Segurança e Conformidade
        </h1>

        {/* Security Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <Shield className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="font-bold text-gray-800 mb-2">
              Criptografia Ponta a Ponta
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <Lock className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="font-bold text-gray-800 mb-2">
              Autenticação Segura
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <Server className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="font-bold text-gray-800 mb-2">Backups</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Detailed Text */}
        <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Padrões de Indústria
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}
