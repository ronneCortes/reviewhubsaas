import React from 'react';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600 flex-grow">
          <p>
            Este site utiliza cookies para garantir a melhor experiência. Ao continuar navegando, você concorda com nossa
            <a href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline ml-1">Política de Cookies</a>.
          </p>
        </div>
        <div className="flex gap-3 mt-3 md:mt-0">
          <button
            onClick={onAccept}
            className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap"
          >
            Aceitar Cookies
          </button>
          <button
            onClick={onDecline}
            className="bg-slate-200 text-slate-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-300 transition-colors whitespace-nowrap"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
