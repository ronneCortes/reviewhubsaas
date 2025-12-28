import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-8">Página Não Encontrada</p>
      <p className="text-md text-gray-400 text-center mb-12">
        Parece que você tentou acessar uma página que não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;
