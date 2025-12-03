/* --- PAGE: SYSTEM STATUS --- */
import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function Status() {
  const systems = [
    { name: "API Principal", status: "Operacional", uptime: "99.99%" },
    { name: "Dashboard do Cliente", status: "Operacional", uptime: "100%" },
    {
      name: "Processamento de Pagamentos",
      status: "Operacional",
      uptime: "99.95%",
    },
    { name: "Servidor de E-mails", status: "Operacional", uptime: "99.98%" },
    { name: "Banco de Dados", status: "Operacional", uptime: "100%" },
  ];

  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Status Header */}
          <div className="bg-green-600 p-8 text-white text-center">
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-3xl font-bold mb-2">
              Todos os sistemas operacionais
            </h1>
            <p className="opacity-90">Última verificação: Agora mesmo</p>
          </div>

          {/* Systems List */}
          <div className="divide-y divide-gray-100">
            {systems.map((sys, idx) => (
              <div
                key={idx}
                className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-800">{sys.name}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 hidden sm:block">
                    {sys.uptime} uptime
                  </span>
                  <span className="flex items-center gap-2 text-green-700 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full border border-green-100">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    {sys.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
