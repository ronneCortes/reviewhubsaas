import React from 'react';
import { Mail, MessageCircle, Share2, LayoutDashboard, BrainCircuit, Globe, Bell, Filter, Smartphone, Monitor, BarChart3 } from 'lucide-react';

const featuresList = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Solicitações Automatizadas",
    description: "Envie solicitações de avaliação via SMS, e-mail ou WhatsApp usando listas de contatos ou solicitações rápidas."
  },
  {
    icon: <Filter className="w-6 h-6" />,
    title: "Funil de Feedback Negativo",
    description: "Direcione clientes insatisfeitos para feedback privado, mantendo as avaliações públicas positivas."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Integração Multiplataforma",
    description: "Gerencie avaliações do Google, Facebook, Yelp, Trustpilot, TripAdvisor e muito mais."
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Ferramentas de Resposta",
    description: "Responda a avaliações e feedbacks diretamente na plataforma com facilidade."
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Análise de Sentimento com IA",
    description: "Obtenha resumos, identifique aspectos positivos e gere planos de ação a partir das avaliações."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Agentes de IA",
    description: "Automatize campanhas recorrentes de avaliação (SMS/E-mail) para novos contatos."
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Compartilhamento Social",
    description: "Compartilhe as melhores avaliações no Facebook e Instagram com um clique."
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Widgets para Site",
    description: "Incorpore carrosséis de avaliações, feeds ou selos diretamente no seu site."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">Ferramentas Completas</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Tudo O Que Você Precisa Para Ter Sucesso
          </h3>
          <p className="text-lg text-slate-500">
            Além do essencial, fornecemos ferramentas poderosas para automatizar e simplificar cada aspecto da sua reputação.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-indigo-100 transition-all duration-300 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};