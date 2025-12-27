import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { AIDemo } from './components/AIDemo';
import KnowledgeBasePage from './components/KnowledgeBasePage';

import LegalPagesContainer from './components/LegalPagesContainer';

const App: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentPath = window.location.pathname;

  if (currentPath.startsWith('/privacy-policy') ||
      currentPath.startsWith('/terms-of-service') ||
      currentPath.startsWith('/cookie-policy')) {
    return <LegalPagesContainer />;
  } else if (currentPath === '/knowledge-base') {
    return <KnowledgeBasePage />;  } else {
    return (
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar onNavigate={scrollToSection} />
        
        <main>
          <Hero onCtaClick={() => scrollToSection('pricing')} onDemoClick={() => scrollToSection('demo')} />
          
          {/* Step 1: Explain the Core Solutions Visually */}
          <ProductShowcase onTryFree={() => scrollToSection('pricing')} />

          {/* Step 2: Let them try the Magic (AI) */}
          <AIDemo />

          {/* Step 3: Show the rest of the toolkit (Details) */}
          <Features />
          
          {/* Step 4: Social Proof */}
          <Testimonials />

          {/* CTA Strip */}
          <div className="bg-indigo-600 py-24 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
             
             <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
               <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Pronto para Ver Resultados Reais?</h2> 
                <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed"> 
                  Colete avaliações, melhore classificações e proteja sua marca em um só lugar. 
                </p> 
                <button  
                   onClick={() => scrollToSection('pricing')} 
                   className="inline-flex items-center justify-center bg-white text-indigo-600 font-bold py-4 px-10 rounded-xl hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1" 
                > 
                  Teste Grátis 
                </button> 
                <p className="mt-4 text-sm text-indigo-200 opacity-80">Não é necessário cartão de crédito • Cancele a qualquer momento</p>
             </div>
          </div>

          {/* Step 5: The Offer */}
          <Pricing />
        </main>

        <Footer />
      </div>
    );
  }
};

export default App;