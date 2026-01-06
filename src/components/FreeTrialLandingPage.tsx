import React from 'react';
import { Hero } from '../../components/Hero';
import { ProductShowcase } from '../../components/ProductShowcase';
import { AIDemo } from '../../components/AIDemo';
import { Features } from '../../components/Features';
import { Testimonials } from '../../components/Testimonials';
import { Pricing } from '../../components/Pricing';
import { ArrowRight } from 'lucide-react';
import { ExternalPlanButton } from './ExternalPlanButton';

interface FreeTrialProps {
  onNavigate: (id: string) => void;
}

export const FreeTrialLandingPage: React.FC<FreeTrialProps> = ({ onNavigate }) => {
  const handlePlanNavigation = () => {
    window.open('https://login.reviewhubsaas.com/#/plan/695b5ccc371343fe75c8364f', '_blank');
  };
  return (
    <>
      <Hero onCtaClick={handlePlanNavigation} />
       
      {/* Product Solutions */}
      <ProductShowcase onTryFree={handlePlanNavigation} />

      {/* Live Demo CTA */}
      <AIDemo />

      {/* Feature Details */}
      <Features />
       
      {/* Social Proof */}
      <Testimonials />

      {/* Conversion Strip */}
      <div className="bg-indigo-600 py-24 text-center text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
          
         <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
           <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Comece Seu Período de Teste Agora</h2>
           <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
             Junte-se a milhares de empresas que já automatizaram sua reputação online.
           </p>
           <ExternalPlanButton buttonText="Teste Grátis" />
           <p className="mt-4 text-sm text-indigo-200 opacity-80">30 dias grátis • Sem compromisso</p>
         </div>
      </div>

      {/* Pricing Options */}

    </>
  );
};
