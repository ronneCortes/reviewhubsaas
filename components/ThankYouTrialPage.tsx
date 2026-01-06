import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom'; // Importe Link do react-router-dom

const ThankYouTrialPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      {/* Logo Section */}
      <div className="w-full text-center py-4">
        <Link to="/" className="inline-flex items-center justify-center">
          <img
            src="/icon.png" // Adjust path as needed
            alt="Review Hub Logo"
            className="h-10"
            width="40"
            height="40"
          />
          <span className="ml-3 text-xl font-bold text-white">Review Hub</span>
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
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 hidden sm:block">
                Cadastro realizado com sucesso! 🎉
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 hidden sm:block">
                Em alguns minutos, você receberá um e-mail com as instruções para acessar sua conta e iniciar o onboarding no ReviewHub.
              </p>
              {/* Mobile Specific Content */}
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 sm:hidden">
                Cadastro confirmado ✅
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 sm:hidden">
                Em breve você receberá um e-mail com acesso e instruções para começar a usar o ReviewHub.
              </p>
            </div>
          </div>

          {/* Section 2: Details */}
          <div className="flex-1 flex flex-col p-4 lg:p-8 overflow-y-auto">
            <div className="max-w-2xl mx-auto w-full space-y-6">
              {/* Card 1: O que acontece agora? */}
              <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
                <h3 className="font-bold text-white mb-6 text-2xl text-center">O que acontece agora?</h3>
                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">Verifique seu e-mail</h4>
                      <p className="text-sm text-gray-300">
                        Enviaremos um e-mail com:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-300 ml-4 mt-1 space-y-1">
                        <li>Link de acesso à plataforma</li>
                        <li>Dados para login</li>
                        <li>Instruções iniciais de configuração</li>
                      </ul>
                    </div>
                  </div>
                  {/* Step 2 */}
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">Complete o onboarding</h4>
                      <p className="text-sm text-gray-300">
                        Você será guiado passo a passo para:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-300 ml-4 mt-1 space-y-1">
                        <li>Conectar suas plataformas de avaliação</li>
                        <li>Configurar pedidos automáticos de avaliações</li>
                        <li>Começar a coletar avaliações rapidamente</li>
                      </ul>
                    </div>
                  </div>
                  {/* Step 3 */}
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">Comece a ver resultados</h4>
                      <p className="text-sm text-gray-300">
                        Assim que a configuração estiver pronta, você já poderá:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-300 ml-4 mt-1 space-y-1">
                        <li>Enviar pedidos de avaliação</li>
                        <li>Acompanhar avaliações em tempo real</li>
                        <li>Fortalecer sua reputação online</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Importante: */}
              <div className="bg-amber-900/20 rounded-lg p-6 border border-amber-700 text-amber-100 text-sm">
                <p className="font-bold mb-2">⚠️ Não encontrou o e-mail?</p>
                <p>Verifique sua caixa de spam ou promoções. Se ainda não encontrar, aguarde alguns minutos — o envio pode levar um pouco mais dependendo do seu provedor de e-mail.</p>
              </div>
            </div>
            {/* CTA Opcional */}
            <div className="mt-8 text-center flex flex-col items-center space-y-4">
              <a href="mailto:info@reviewhubsaas.com?subject=Suporte%20Review%20Hub" className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
                Precisa de ajuda? Fale com nosso suporte
              </a>
              <Link to="/" className="inline-flex items-center justify-center bg-gray-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors shadow-lg">
                Voltar para a Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Micro-confiança (rodapé) */}
      <div className="w-full text-center py-6 bg-gray-900 text-gray-400 text-sm">
        <p>Você está a poucos passos de transformar avaliações em novos clientes.</p>
      </div>
    </div>
  );
};

export default ThankYouTrialPage;