import React from 'react';
import { CheckCircle2, Mail, Layout, TrendingUp, HelpCircle, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

export const ThankYouTrial: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <a 
          href="/"
          className="flex items-center group focus:outline-none mb-10"
        >
          <div className="text-white p-1.5 rounded-lg mr-2 shadow-sm transition-colors">
            <img src="/icon.png" alt="Review Hub Logo" className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
            Review Hub
          </span>
        </a>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Section 1: Header */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-xl text-center">
            {/* Header Section */}
            <div className="animate-fade-in-up">
               <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6 shadow-sm border-4 border-white">
                  <CheckCircle2 size={40} />
               </div>
               <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Cadastro realizado com sucesso! 🎉
               </h1>
               <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
                  Em alguns minutos, você receberá um e-mail com as instruções para acessar sua conta e iniciar o onboarding no ReviewHub.
               </p>
            </div>
          </div>
        </div>

        {/* Section 2: Steps, Security, Footer */}
        <div className="flex-1 flex flex-col justify-center p-4 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
               {[
             {
               icon: <Mail className="text-indigo-600" />,
               title: "1. Verifique seu e-mail",
               desc: "Enviaremos o link de acesso, dados de login e instruções iniciais."
             },
             {
               icon: <Layout className="text-indigo-600" />,
               title: "2. Complete o onboarding",
               desc: "Conecte suas plataformas e configure seus primeiros pedidos automáticos."
             },
             {
               icon: <TrendingUp className="text-indigo-600" />,
               title: "3. Veja os resultados",
               desc: "Comece a coletar avaliações 5 estrelas e fortaleça sua presença online."
             }
           ].map((step, i) => (
             <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                   {step.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
             </div>
           ))}
            </div>

            {/* Security / Help Block */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-12 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
               <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                     <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-wider text-xs mb-3">
                        <ShieldCheck size={14} /> Importante
                     </div>
                     <h4 className="text-lg font-bold text-slate-900 mb-2">Não encontrou o e-mail?</h4>
                     <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Verifique sua caixa de spam ou promoções. Se ainda não encontrar, aguarde alguns minutos — o envio pode levar um pouco mais dependendo do seu provedor.
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <a href="mailto:suporte@reviewhubsaas.com" className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:underline">
                           <HelpCircle size={16} /> Precisa de ajuda? Fale conosco
                        </a>
                        <a href="/" className="inline-flex items-center gap-2 text-slate-600 font-bold text-sm hover:underline">
                           Voltar para a Home
                        </a>
                     </div>
                  </div>
                  <div className="w-px h-24 bg-slate-100 hidden md:block"></div>
                  <div className="flex-shrink-0">
                     <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg">
                        Acessar Dashboard <ArrowRight size={18} />
                     </button>
                  </div>
               </div>
            </div>

            <div className="text-center text-slate-400 text-sm font-medium">
               Você está a poucos passos de transformar avaliações em novos clientes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ThankYouTrial;