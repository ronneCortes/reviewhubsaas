import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export const FreeTrialPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-slate-800 rounded-lg shadow-xl p-8 md:p-12 text-center relative overflow-hidden">
        {/* Logo and Title */}
        <div className="absolute top-8 left-8 flex items-center space-x-2">
          <img src="/icon.png" alt="Review Hub Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-white">Review Hub</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center mt-16 md:mt-0">
          <CheckCircleIcon className="h-24 w-24 text-green-500 mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Comece seu Teste Grátis de 7 Dias!
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
            Experimente todas as funcionalidades do Review Hub e veja como é fácil transformar avaliações em novos clientes. Sem compromisso, sem cartão de crédito.
          </p>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left w-full max-w-3xl">
            <div className="bg-slate-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-2">Coleta de Avaliações</h3>
              <p className="text-slate-300 text-sm">Automatize o envio de pedidos de avaliação por e-mail, SMS e WhatsApp.</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-2">Gestão Centralizada</h3>
              <p className="text-slate-300 text-sm">Monitore e responda a todas as suas avaliações em um só lugar.</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white mb-2">Análise e Relatórios</h3>
              <p className="text-slate-300 text-sm">Obtenha insights valiosos para melhorar sua reputação online.</p>
            </div>
          </div>

          {/* Call to Action */}
          <a
            href="https://login.reviewhubsaas.com/#/plan/695b5ccc371343fe75c8364f"
            className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold py-4 px-10 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg text-xl uppercase tracking-wide mb-6"
          >
            Ativar Teste Grátis Agora!
          </a>

          <p className="text-sm text-slate-400 mb-8">
            Não é necessário cartão de crédito. Cancele a qualquer momento.
          </p>

          {/* Footer / Micro-confiança */}
          <p className="text-md text-slate-400 mt-8">
            Junte-se a centenas de empresas que estão transformando suas avaliações em crescimento real.
          </p>
        </div>
      </div>
    </div>
  );
};
