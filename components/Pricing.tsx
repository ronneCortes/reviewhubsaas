import React, { useState } from 'react';
import { Check, Star, Zap, Shield, Crown } from 'lucide-react';
import { PricingTier } from '../types';

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const tiers: PricingTier[] = [
    {
      name: "Iniciante",
      price: billingCycle === 'monthly' ? "R$29.99" : "R$24.99",
      description: "Projetado para empresas locais prontas para assumir o controle de sua reputação e atrair mais clientes através de feedback consistente.",
      features: [
        "E-mail Mensal: 100",
        "SMS Mensal: 100",
        "Whatsapp Mensal: 100",
        "Funcionalidades: 02",
        "Sites de Avaliação: 01"
      ],
      recommended: false
    },
    {
      name: "Negócios",
      price: billingCycle === 'monthly' ? "R$49.99" : "R$39.99",
      description: "Para marcas em crescimento e agências que desejam escalar sua estratégia de avaliações, otimizar operações e gerenciar múltiplos locais.",
      features: [
        "E-mail Mensal: 250",
        "SMS Mensal: 200",
        "Whatsapp Mensal: 500",
        "Funcionalidades: 5",
        "Sites de Avaliação: 05",
        "Widgets de avaliação",
        "Dashboard de análise",
        "Ferramentas de compartilhamento social",
        "Respostas com IA"
      ],
      recommended: true
    },
    {
      name: "Crescimento",
      price: billingCycle === 'monthly' ? "R$198.99" : "R$159.99",
      description: "Uma solução completa para franquias e empresas que precisam de controle avançado, automação e suporte dedicado.",
      features: [
        "E-mail Mensal: 1000",
        "SMS Mensal: 1000",
        "Whatsapp Mensal: 2000",
        "Funcionalidades: Todas",
        "Sites de Avaliação: 14",
        "Widgets de avaliação",
        "Dashboard de análise",
        "Ferramentas de compartilhamento social",
        "Respostas com IA"
      ],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900 relative overflow-hidden">
       {/* Ambient Background */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 text-white">
          <h2 className="text-indigo-400 font-bold tracking-wide uppercase text-sm mb-3">Planos e Preços</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Escolha Seu Plano de Crescimento
          </h3>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Preços simples e transparentes. Sem taxas de instalação. Cancele quando quiser.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>Mensal</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-slate-700 rounded-full p-1 transition-colors hover:bg-slate-600 focus:outline-none ring-offset-2 ring-offset-slate-900 focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle billing cycle"
            >
              <div className={`w-6 h-6 bg-indigo-500 rounded-full shadow-md transform transition-transform duration-300 ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400'}`}>
              Anual <span className="text-green-400 text-xs ml-1 font-bold">(Economize 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Grid - Added more gap and refined vertical alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start pt-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative flex flex-col h-full rounded-3xl p-8 transition-all duration-300 border ${
                tier.recommended 
                  ? 'bg-white text-slate-900 shadow-2xl shadow-indigo-500/30 lg:scale-110 z-20 border-transparent order-first lg:order-none' 
                  : 'bg-slate-800/40 backdrop-blur-md text-white border-slate-700/50 hover:bg-slate-800/60 z-10'
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-max">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg uppercase tracking-wider flex items-center gap-2">
                    <Star size={12} fill="currentColor" /> Mais Popular
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                   <h3 className={`text-lg font-bold uppercase tracking-wider ${tier.recommended ? 'text-indigo-600' : 'text-indigo-400'}`}>
                     {tier.name}
                   </h3>
                   {index === 0 && <Zap size={20} className="text-slate-400" />}
                   {index === 1 && <Crown size={20} className="text-indigo-600" />}
                   {index === 2 && <Shield size={20} className="text-purple-400" />}
                </div>
                
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                  <span className={`ml-2 text-sm font-medium ${tier.recommended ? 'text-slate-500' : 'text-slate-400'}`}>/mês</span>
                </div>
                {billingCycle === 'yearly' && (
                  <p className="text-xs text-green-500 font-semibold mb-4">Faturado anualmente</p>
                )}
                <p className={`text-sm leading-relaxed ${tier.recommended ? 'text-slate-600' : 'text-slate-300'}`}>
                  {tier.description}
                </p>
              </div>

              <div className={`h-px w-full mb-8 ${tier.recommended ? 'bg-slate-100' : 'bg-slate-700/50'}`}></div>
              
              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, i) => (
                    <li key={i} className="flex items-start">
                      <div className={`rounded-full p-1 mr-3 flex-shrink-0 ${tier.recommended ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-700 text-indigo-400'}`}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-medium leading-tight ${tier.recommended ? 'text-slate-700' : 'text-slate-300'}`}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4">
                <a 
                  href="https://app.reviewhubsaas.com/register"
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 mb-3 ${
                  tier.recommended
                    ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-1'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10 hover:-translate-y-1'
                }`}>
                  TESTE GRÁTIS
                </a>
                <p className={`text-center text-xs ${tier.recommended ? 'text-slate-500' : 'text-slate-400'}`}>Cancele a qualquer momento</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};