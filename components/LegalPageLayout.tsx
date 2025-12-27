import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LegalPageLayoutProps {
  initialTab?: string;
  privacyContent: React.ReactNode;
  termsContent: React.ReactNode;
  cookieContent: React.ReactNode;
  title: string;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  initialTab = 'privacy',
  privacyContent,
  termsContent,
  cookieContent,
  title,
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'privacy':
        return privacyContent;
      case 'terms':
        return termsContent;
      case 'cookies':
        return cookieContent;
      default:
        return privacyContent;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onNavigate={scrollToSection} />
      <main>
        <div className="bg-slate-50 py-16 pt-36">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">{title}</h1>
            <div className="flex border-b border-slate-200">
              <button
                className={`py-2 px-4 text-sm font-medium ${activeTab === 'privacy' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
                onClick={() => setActiveTab('privacy')}
              >
                Política de Privacidade
              </button>
              <button
                className={`py-2 px-4 text-sm font-medium ${activeTab === 'terms' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
                onClick={() => setActiveTab('terms')}
              >
                Termos de Serviço
              </button>
              <button
                className={`py-2 px-4 text-sm font-medium ${activeTab === 'cookies' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
                onClick={() => setActiveTab('cookies')}
              >
                Política de Cookies
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};
