import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ChatBubbleLeftRightIcon, 
  ChartBarIcon, 
  EnvelopeIcon, 
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowRightIcon,
  XMarkIcon,
  Bars3Icon
} from '@heroicons/react/24/solid';
import { 
  StarIcon,
  ArrowTrendingUpIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import { FreeTrialNavbar } from './FreeTrialNavbar';
import { FreeTrialFooter } from './FreeTrialFooter';
import { ProductShowcase } from '../../components/ProductShowcase';
import { AIDemo } from '../../components/AIDemo';

export const FreeTrialLandingPage: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const faqs = [
    {
      question: "É necessário cartão de crédito para o teste grátis?",
      answer: "Não! Nosso teste grátis de 7 dias não exige nenhum dado de cartão de crédito. Experimente sem compromisso."
    },
    {
      question: "O que acontece ao final do período de teste?",
      answer: "Após 7 dias, você pode escolher um de nossos planos. Se não assinar, sua conta será desativada, mas seus dados serão mantidos por um tempo caso mude de ideia."
    },
    {
      question: "Posso adicionar minha equipe ao teste grátis?",
      answer: "Sim! Convide até 3 membros da sua equipe para explorar todas as funcionalidades de colaboração durante o teste."
    },
    {
    question: "Quais plataformas de avaliação são integradas?",
      answer: "Integramos com as principais plataformas como Google Meu Negócio, Facebook, TripAdvisor, Reclame Aqui e muitas outras específicas do seu segmento."
    },
    {
      question: "Preciso de conhecimento técnico para usar o Review Hub?",
      answer: "Não! Nossa plataforma é super intuitiva, projetada para empreendedores. Oferecemos suporte completo para você tirar o máximo proveito."
    }
  ];

  const features = [
    {
      icon: <EnvelopeIcon className="h-8 w-8 text-indigo-600" />,
      title: "Solicitação Automática",
      description: "Aumente o volume de avaliações com pedidos automáticos e personalizados via e-mail, SMS e WhatsApp."
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-indigo-600" />,
      title: "Respostas Centralizadas",
      description: "Gerencie e responda a todas as avaliações de diversas plataformas em um único painel intuitivo, economizando tempo."
    },
    {
      icon: <ChartBarIcon className="h-8 w-8 text-indigo-600" />,
      title: "Análises Detalhadas",
      description: "Obtenha insights valiosos com relatórios completos sobre satisfação do cliente, desempenho e reputação online."
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8 text-indigo-600" />,
      title: "App Móvel",
      description: "Acompanhe e gerencie sua reputação de qualquer lugar, respondendo avaliações diretamente do seu smartphone."
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-indigo-600" />,
      title: "Monitoramento de Reputação",
      description: "Receba alertas instantâneos sobre novas avaliações, especialmente as negativas, para agir rapidamente e proteger sua marca."
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-indigo-600" />,
      title: "Gestão de Equipe",
      description: "Colabore eficientemente atribuindo e gerenciando tarefas de resposta a avaliações com permissões personalizadas para cada membro."
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Proprietário - Restaurante Sabor Mineiro",
      content: "Em 3 meses com o Review Hub, nossas avaliações no Google aumentaram 340%. Conquistamos o selo 'Excelente' e isso refletiu diretamente nas vendas.",
      rating: 5
    },
    {
      name: "Mariana Silva",
      role: "Gerente - Clínica Estética Bella",
      content: "A automação de solicitações de avaliação economizou 10 horas semanais da nossa equipe. Agora 85% dos nossos clientes deixam avaliação.",
      rating: 5
    },
    {
      name: "Roberto Alves",
      role: "CEO - Construtora Horizonte",
      content: "Responder avaliações negativas rapidamente transformou nossa reputação online. O Review Hub nos alerta em tempo real sobre problemas.",
      rating: 5
    }
  ];

  return (
    <>
      <FreeTrialNavbar onNavigate={scrollToSection} />
      <div className="min-h-screen bg-white py-8 px-4">

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="inline-flex items-center bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircleIcon className="h-5 w-5 mr-2" />
                Teste Grátis de 7 Dias - Sem Cartão de Crédito
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Domine sua Reputação Online: Mais Avaliações, Mais Clientes, Mais Vendas com <span className="text-indigo-600">Review Hub</span>
              </h1>
              
              <p className="text-xl text-slate-700 mb-8 max-w-2xl">
                Automatize a coleta e gestão de avaliações, melhore seu posicionamento online e impulsione suas vendas. Experimente grátis por 7 dias!
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                <a
                  href="https://login.reviewhubsaas.com/#/plan/695b5ccc371343fe75c8364f"
                  className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg text-lg transform hover:scale-105"
                >
                  Comece Agora - Teste Grátis
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </a>
                
                <a
                  href="#features"
                  className="inline-flex items-center justify-center bg-slate-200 text-slate-900 font-medium py-4 px-8 rounded-lg hover:bg-slate-300 transition-colors text-lg transform hover:scale-105"
                >
                  Descubra as Funcionalidades
                </a>
              </div>
              

            </div>
            
            <div className="w-full md:w-1/2 md:pl-12">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Dashboard Review Hub</h3>
                    <p className="text-slate-600">Visão geral da sua reputação</p>
                  </div>
                  <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    AO VIVO
                  </div>
                </div>
                
                {/* Mock Dashboard */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center mr-4">
                        <StarIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-600 text-sm">Avaliação Média</p>
                        <p className="text-2xl font-bold text-slate-900">4.8 <span className="text-lg text-slate-600">/5</span></p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-500 text-sm font-medium flex items-center">
                        <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                        +12% este mês
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-slate-600 text-sm">Avaliações Totais</p>
                      <p className="text-2xl font-bold text-slate-900">247</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <p className="text-slate-600 text-sm">Taxa de Resposta</p>
                      <p className="text-2xl font-bold text-slate-900">94%</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-slate-600 text-sm mb-2">Solicitações de Avaliação</p>
                    <div className="flex items-center justify-between">
                      <div className="w-full bg-slate-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-slate-900 font-bold ml-3">78%</span>
                    </div>
                    <p className="text-slate-600 text-xs mt-2">Enviadas automaticamente após cada serviço</p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-slate-600 text-sm text-center">
                    Estatísticas reais de clientes Review Hub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductShowcase onTryFree={() => window.location.href = "https://login.reviewhubsaas.com/#/plan/695b5ccc371343fe75c8364f"} />

      <AIDemo />

      {/* Social Proof */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-600 text-lg mb-4 md:mb-0">Confiança comprovada: Nossos clientes representam diversos setores:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Restaurantes', 'Clínicas', 'Construtoras', 'Lojas'].map((industry) => (
                <div key={industry} className="flex flex-col items-center">
                  <CheckBadgeIcon className="h-8 w-8 text-indigo-500 mb-2" />
                  <p className="text-slate-900 font-medium">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recursos Poderosos para o Sucesso da sua Reputação</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Simplifique a gestão de avaliações e impulsione seu crescimento com nossas ferramentas intuitivas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md border border-slate-200 hover:border-indigo-500 transition-all transform hover:scale-105">
                <div className="mb-6 flex items-center justify-center h-16 w-16 rounded-full bg-indigo-50">
                  {React.cloneElement(feature.icon, { className: "h-8 w-8 text-indigo-600" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-700">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-indigo-600 text-white py-24 text-center relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
              <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Pronto para transformar sua reputação online?</h3>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Experimente o Review Hub gratuitamente por 7 dias. Sem compromisso, sem cartão de crédito, sem complicação.
              </p>
              <div>
                <a
                  href="https://login.reviewhubsaas.com/#/plan/695b5ccc371343fe75c8364f"
                  className="inline-flex items-center justify-center bg-white text-indigo-600 font-bold py-4 px-10 rounded-xl hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Ativar Teste Grátis
                </a>
                <p className="mt-4 text-sm text-indigo-200 opacity-80">Não é necessário cartão de crédito • Cancele a qualquer momento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Histórias de Sucesso que Inspiram</h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Veja como o Review Hub transformou a reputação e os resultados de negócios como o seu.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md border border-slate-200 transform hover:scale-105 transition-all">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">{testimonial.name}</p>
                    <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/CTA Section */}
      <section id="pricing" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comece Sua Jornada de Sucesso Hoje!</h2>
            <p className="text-xl text-slate-700">
              Aproveite 7 dias de acesso total a todos os recursos, sem compromisso.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 bg-indigo-600 text-white text-xs font-bold px-6 py-2 rounded-full rotate-12">
              MAIS POPULAR
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Acesso Total por 7 Dias</h3>
                <p className="text-slate-700">Experimente todas as funcionalidades premium da plataforma</p>
              </div>
              <div className="mt-6 md:mt-0">
                <div className="text-center">
                  <p className="text-5xl font-bold text-slate-900">R$0</p>
                  <p className="text-slate-600">por 7 dias</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                "Solicitações ilimitadas de avaliações",
                "Respostas centralizadas e eficientes",
                "Dashboard analítico completo e intuitivo",
                "Integração com mais de 10 plataformas líderes",
                "App móvel para gestão em qualquer lugar",
                "Suporte prioritário por e-mail e chat",
                "Até 3 membros da equipe com permissões",
                "Relatórios semanais automáticos de desempenho"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a
                  href="https://login.reviewhubsaas.com/#/plan/695b5ccc371343fe75c8364f"
                  className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold py-5 px-12 rounded-lg hover:bg-indigo-700 transition-colors shadow-xl text-xl w-full md:w-auto transform hover:scale-105"
                >
                Ativar Teste Grátis Agora
                <ArrowRightIcon className="h-6 w-6 ml-3" />
              </a>
              <p className="text-slate-600 text-sm mt-4">
                Não é necessário cartão de crédito • Cancele a qualquer momento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Suas Dúvidas, Nossas Respostas</h2>
            <p className="text-xl text-slate-700">
              Encontre aqui as informações que você precisa para começar a usar o Review Hub.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                >
                  <span className="text-lg font-medium text-slate-900">{faq.question}</span>
                  {faqOpen === index ? (
                    <XMarkIcon className="h-6 w-6 text-indigo-600" />
                  ) : (
                    <Bars3Icon className="h-6 w-6 text-indigo-600" />
                  )}
                </button>
                {faqOpen === index && (
                  <div className="px-6 pb-6 text-slate-700">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    <FreeTrialFooter />
    </>
  );
};
