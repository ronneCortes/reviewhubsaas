import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Soluções', id: 'solutions', type: 'scroll' },
    { name: 'Demo Ao Vivo', id: 'https://reviewhubsaas.com/live-demo-review-hub', type: 'external' },
    { name: 'Funcionalidades', id: 'features', type: 'scroll' },
    { name: 'Preços', id: 'pricing', type: 'scroll' },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 py-3 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => onNavigate('hero')}
            className="flex items-center group focus:outline-none"
          >
            <div className="bg-indigo-600 text-white p-1.5 rounded-lg mr-2 shadow-sm group-hover:bg-indigo-700 transition-colors">
              <Star size={20} fill="currentColor" className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              Review Hub
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                link.type === 'external' ? (
                  <a
                    key={link.name}
                    href={link.id}
                    className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => onNavigate(link.id)}
                    className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    {link.name}
                  </button>
                )
              ))}
            </div>
            
            <div className="w-px h-5 bg-slate-200 mx-2"></div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://app.reviewhubsaas.com/login"
                className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
              >
                Entrar
              </a>
              <button 
                onClick={() => onNavigate('pricing')}
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Teste Grátis
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-white/98 backdrop-blur-xl transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '65px' }}
      >
        <div className="flex flex-col p-6 space-y-6 h-full overflow-y-auto pb-20">
          {navLinks.map((link) => (
             link.type === 'external' ? (
                <a
                  key={link.name}
                  href={link.id}
                  className="text-xl font-semibold text-slate-800 hover:text-indigo-600 text-left py-2 border-b border-slate-50"
                >
                  {link.name}
                </a>
             ) : (
                <button
                  key={link.name}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-xl font-semibold text-slate-800 hover:text-indigo-600 text-left py-2 border-b border-slate-50"
                >
                  {link.name}
                </button>
             )
          ))}
          <div className="pt-6 mt-2 flex flex-col gap-4">
            <a 
              href="https://app.reviewhubsaas.com/login"
              className="w-full text-center py-3 text-lg font-semibold text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50"
            >
              Entrar
            </a>
            <button 
               onClick={() => {
                 onNavigate('pricing');
                 setIsMobileMenuOpen(false);
               }}
              className="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-lg text-center hover:bg-indigo-700"
            >
              Teste Grátis
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};