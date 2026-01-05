import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

interface FreeTrialNavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const FreeTrialNavbar: React.FC<FreeTrialNavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Funcionalidades', id: 'features' },
    { name: 'Depoimentos', id: 'testimonials' },
    { name: 'Preços', id: 'pricing' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center group focus:outline-none">
            <div className="text-white p-1.5 rounded-lg mr-2 shadow-sm  transition-colors">
              <img src="/icon.png" alt="Review Hub Logo" className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              Review Hub
            </span>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://login.reviewhubsaas.com/#/plan/695b5ccc371343fe75c8364f"
            className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors shadow-md text-sm"
          >
            Começar Teste Grátis
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-indigo-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex justify-between items-center px-4 py-4 border-b border-slate-200">
            <Link to="/" className="flex items-center group focus:outline-none">
              <div className="text-white p-1.5 rounded-lg mr-2 shadow-sm  transition-colors">
                <img src="/icon.png" alt="Review Hub Logo" className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Review Hub
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-indigo-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://login.reviewhubsaas.com/#/plan/695b5ccc371343fe75c8364f"
              className="block w-full text-center mt-4 px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Começar Teste Grátis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
