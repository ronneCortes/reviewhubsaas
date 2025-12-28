import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom'; // Importe Link do react-router-dom

const ThankYouLeadsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Logo Section */}
      <div className="w-full text-center py-4">
        <Link to="/" className="inline-flex items-center justify-center">
          <img
            src="/icon.png" // Adjust path as needed
            alt="Review Hub Logo"
            title="Review Hub"
            className="h-10"
          />
        </Link>
      </div>

      {/* Main Content Sections */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col lg:flex-row">
          {/* Section 1: Header */}
          <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <CheckCircleIcon className="h-20 w-20 text-green-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Pedido recebido com sucesso! 🎉
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Estamos analisando a reputação online do seu negócio e preparando um relatório exclusivo para você.
              </p>
            </div>
          </div>

          {/* Section 2: Details */}
          <div className="flex-1 flex flex-col p-4 lg:p-8 overflow-y-auto">
            <div className="max-w-2xl mx-auto w-full space-y-6">
              {/* Card 1: O que você vai encontrar no seu relatório */}
              <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
                <h3 className="font-bold text-white mb-3 text-lg">O que você vai encontrar no seu relatório</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    Avaliações do seu negócio nas principais plataformas
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    Análise de sentimento dos comentários (positivos, negativos, neutros)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    Comparativo com seus principais concorrentes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    Pontos fortes e fracos identificados
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    Recomendações personalizadas para melhorar sua reputação
                  </li>
                </ul>
              </div>

              {/* Card 2: Quando você vai receber seu relatório? */}
              <div className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                <h3 className="font-bold text-white mb-3 text-lg">Quando você vai receber seu relatório?</h3>
                <p className="text-sm text-gray-300">
                  Nossa equipe de especialistas está trabalhando para analisar os dados do seu negócio. Você receberá o relatório completo no seu e-mail em até <span className="font-bold text-emerald-400">24 horas úteis</span>.
                </p>
                <p className="text-sm text-gray-300 mt-2">
                  Fique atento à sua caixa de entrada (e spam)! Enviaremos uma notificação assim que estiver pronto.
                </p>
              </div>

              {/* Card 3: Importante: */}
              <div className="bg-amber-900/20 rounded-lg p-6 border border-amber-700 text-amber-100 text-sm">
                <p className="font-bold mb-2">⚠️ Importante:</p>
                <p>Para garantir que você receba seu relatório, adicione <span className="font-bold">info@reviewhubsaas.com</span> aos seus contatos ou lista de remetentes seguros. Assim, evitamos que o e-mail caia na caixa de spam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouLeadsPage;