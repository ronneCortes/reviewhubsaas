import React from 'react';

export const FreeTrialFooter: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Review Hub. Todos os direitos reservados.
      </div>
    </footer>
  );
};
