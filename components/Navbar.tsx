import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Star } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll quando menu mobile está aberto
  useEffect(() => {
    let scrollY = 0;

    if (isMobileMenuOpen) {
      // Salva a posição atual do scroll
      scrollY = window.scrollY;
      
      // Bloqueia o scroll e fixa a página
      document.body.classList.add('menu-open');
      document.body.style.top = `-${scrollY}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      
      // Previne eventos de toque indesejados
      const preventTouchMove = (e: TouchEvent) => {
        e.preventDefault();
      };

      // Previne eventos de mouse drag
      const preventMouseDrag = (e: MouseEvent) => {
        if (e.target !== menuRef.current) {
          e.preventDefault();
        }
      };

      document.addEventListener('touchmove', preventTouchMove, { passive: false });
      document.addEventListener('mousedown', preventMouseDrag);
      
      return () => {
        // Restaura tudo quando o menu fecha
        document.body.classList.remove('menu-open');
        document.body.style.top = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.removeEventListener('touchmove', preventTouchMove);
        document.removeEventListener('mousedown', preventMouseDrag);
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMobileMenuOpen]);

  // Prevenir seleção de texto durante gestos
  useEffect(() => {
    const preventSelect = (e: Event) => {
      if (isMobileMenuOpen) {
        const target = e.target as Element;
        if (!target.matches('a, button, [role="button"]')) {
          e.preventDefault();
        }
      }
    };

    document.addEventListener('selectstart', preventSelect);
    return () => document.removeEventListener('selectstart', preventSelect);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Soluções', id: 'solutions', type: 'scroll' },
    { name: 'Demo Ao Vivo', id: 'https://reviewhubsaas.com/live-demo-review-hub', type: 'external' },
    { name: 'Funcionalidades', id: 'features', type: 'scroll' },
    { name: 'Preços', id: 'pricing', type: 'scroll' },
  ];

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* CSS Inline para garantir carregamento */}
      <style>{`
        .mobile-menu-overlay {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          z-index: 40;
          transform: none !important;
          transition: all 0.3s ease-in-out;
          width: 100vw !important;
          height: 100vh !important;
          max-width: 100vw !important;
          max-height: 100vh !important;
        }

        .mobile-menu-content {
          flex: 1;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }

        .mobile-menu-overlay {
          touch-action: none;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .mobile-menu-overlay a,
        .mobile-menu-overlay button {
          touch-action: manipulation;
        }

        body.menu-open {
          overflow: hidden !important;
          position: fixed !important;
          width: 100% !important;
        }

        @media (max-width: 768px) {
          .mobile-menu-overlay {
            width: 100vw !important;
            height: 100vh !important;
            max-width: 100vw !important;
            max-height: 100vh !important;
          }
        }
      `}</style>

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a 
              href="/"
              className="flex items-center group focus:outline-none"
            >
              <div className="text-white p-1.5 rounded-lg mr-2 shadow-sm  transition-colors">
                <img src="/icon.png" alt="Review Hub Logo" className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                Review Hub
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  link.type === 'external' ? (
                    <a
                      key={link.name}
                      href={link.id}
                      className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
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
                  href="http://login.reviewhubsaas.com/?_gl=1*94sxgy*_gcl_au*NTQ3MjM2NTg5LjE3NjU5NjI5OTI.*_ga*MTI2OTkxNTE4NC4xNzY1OTYyOTkx*_ga_K8GGH0J1DN*czE3NjYxMzc4MTUkbzQkZzEkdDE3NjYxMzc4MzIkajQzJGwwJGgw"
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
                onClick={handleMenuToggle}
                className="p-2 text-slate-600 hover:text-indigo-600 transition-colors relative z-50"
                aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay - Versão Melhorada */}
        {isMobileMenuOpen && (
          <div 
            ref={menuRef}
            className="mobile-menu-overlay"
            style={{ 
              display: 'block',
              opacity: 1,
              visibility: 'visible'
            }}
            onClick={(e) => {
              // Fecha o menu ao clicar no overlay (fora dos links)
              if (e.target === e.currentTarget) {
                setIsMobileMenuOpen(false);
              }
            }}
          >
            {/* Overlay de fundo */}
            <div 
              className="absolute inset-0 bg-black/10 backdrop-blur-sm md:hidden"
              style={{ pointerEvents: 'none' }}
            />
            
            {/* Menu Container */}
            <div className="mobile-menu-container bg-white relative z-10">
              {/* Header do Menu */}
              <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white">
                <a 
                  href="/"
                  className="flex items-center focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="bg-indigo-600 text-white p-1.5 rounded-lg mr-2 shadow-sm">
                    <Star size={18} fill="currentColor" className="text-white" />
                  </div>
                  <span className="text-lg font-bold text-slate-900">
                    Review Hub
                  </span>
                </a>
                <button
                  onClick={handleMenuToggle}
                  className="p-2 text-slate-600 hover:text-indigo-600 transition-colors"
                  aria-label="Fechar menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links do Menu */}
              <div className="mobile-menu-content p-6 space-y-1 bg-white">
                {navLinks.map((link, index) => (
                  link.type === 'external' ? (
                    <a
                      key={link.name}
                      href={link.id}
                      className="mobile-menu-link block text-lg font-semibold text-slate-800 hover:text-indigo-600 py-4 px-2 rounded-lg transition-colors border-b border-slate-50/50"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button
                      key={link.name}
                      onClick={() => handleLinkClick(link.id)}
                      className="mobile-menu-link block w-full text-left text-lg font-semibold text-slate-800 hover:text-indigo-600 py-4 px-2 rounded-lg transition-colors border-b border-slate-50/50"
                    >
                      {link.name}
                    </button>
                  )
                ))}
              </div>

              {/* Botões de Ação */}
              <div className="p-6 border-t border-slate-100 space-y-3 bg-white">
                <a 
                  href="https://app.reviewhubsaas.com/login"
                  className="mobile-action-button block w-full text-center py-3 text-lg font-semibold text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Entrar
                </a>
                <button 
                  onClick={() => handleLinkClick('pricing')}
                  className="mobile-action-button block w-full bg-indigo-600 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-lg text-center hover:bg-indigo-700 transition-colors"
                >
                  Teste Grátis
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};