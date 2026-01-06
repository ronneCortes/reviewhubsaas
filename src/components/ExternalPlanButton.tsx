import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ExternalPlanButtonProps {
  buttonText?: string;
  className?: string;
}

export const ExternalPlanButton: React.FC<ExternalPlanButtonProps> = ({ 
  buttonText = 'Escolher meu Plano', 
  className = "inline-flex items-center justify-center bg-white text-indigo-600 font-bold py-4 px-10 rounded-xl hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
}) => {
  const handlePlanNavigation = () => {
    window.open('https://login.reviewhubsaas.com/#/plan/695b5ccc371343fe75c8364f', '_blank');
  };

  return (
    <button
      onClick={handlePlanNavigation}
      className={className}
    >
      {buttonText} <ArrowRight size={20} className="ml-2" />
    </button>
  );
};
