import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { AIDemo } from './components/AIDemo';
import { CookieConsent } from './components/CookieConsent';
import { CookiePolicyPage } from './components/CookiePolicyPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';

const App: React.FC = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowCookieConsent(true);
    }

    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowCookieConsent(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowCookieConsent(false);
  };
  
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPage(path);
    if (path.startsWith('#')) {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToSection = (id: string) => {
    if (id.startsWith('/')) {
      navigateTo(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onNavigate={scrollToSection} />
      
      <main>
        {currentPage === '/cookie-policy' && <CookiePolicyPage />}
        {currentPage === '/privacy-policy' && <PrivacyPolicyPage />}
        {currentPage === '/terms-of-service' && <TermsOfServicePage />}

        {currentPage === '/' && (
          <>
            <Hero onCtaClick={() => navigateTo('#pricing')} onDemoClick={() => navigateTo('#demo')} />
            
            {/* Step 1: Explain the Core Solutions Visually */}
            <ProductShowcase onTryFree={() => navigateTo('#pricing')} />

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
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Pronto Para Ver Resultados Reais?</h2>
                <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                  Colete avaliações, melhore seus rankings e proteja sua marca, tudo em um só lugar.
                </p>
                <button 
                  onClick={() => navigateTo('#pricing')}
                  className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-50 transition-colors transform hover:scale-105"
                >
                  Comece Sua Avaliação Gratuita
                </button>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer onNavigate={navigateTo} />
      {showCookieConsent && <CookieConsent onAccept={handleAcceptCookies} onDecline={handleDeclineCookies} />}
    </div>
  );
};

export default App;