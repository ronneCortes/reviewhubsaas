import React from 'react';

interface Article {
  title: string;
  description: string;
  slug: string;
}

const articles: Article[] = [
  {
    title: 'Integrações',
    description: 'Conecta plataformas de avaliação (Google, Facebook, etc.) e contas de redes sociais ao sistema.',
    slug: 'integrations',
  },
  {
    title: 'Link para sua avaliação',
    description: 'Explica como funciona o link personalizado de avaliações, como ele protege a reputação e como compartilhá-lo.',
    slug: 'review-link',
  },
  {
    title: 'Como obter avaliações (solicitações)',
    description: 'Estratégias, fluxos e ferramentas para solicitar avaliações de clientes automaticamente ou manualmente.',
    slug: 'getting-reviews',
  },
  {
    title: 'Respondendo a avaliações',
    description: 'Guia para gerenciar e responder avaliações, incluindo boas práticas e automações.',
    slug: 'replying-reviews',
  },
  {
    title: 'Compartilhando avaliações nas redes sociais',
    description: 'Ensina como transformar avaliações positivas em conteúdo para redes sociais.',
    slug: 'sharing-reviews-social-media',
  },
  {
    title: 'Widgets do site',
    description: 'Exibição de avaliações no site usando widgets personalizáveis (embed, badges, carrosséis, etc.).',
    slug: 'website-widgets',
  },
  {
    title: 'Análise e análise de sentimentos',
    description: 'Painel de analytics + IA, mostrando métricas, tendências e sentimento das avaliações.',
    slug: 'analytics-sentiment',
  },
  {
    title: 'Gerenciamento do perfil comercial do Google',
    description: 'Como gerenciar, otimizar e sincronizar o Google Meu Negócio com a plataforma.',
    slug: 'google-business-profile-management',
  },
  {
    title: 'Automações de Agentes de IA',
    description: 'Uso de agentes de IA para responder avaliações, classificar feedback e automatizar reputação.',
    slug: 'ai-agents-automation',
  },
  {
    title: 'Notificações e histórico',
    description: 'Configuração de alertas, notificações e acompanhamento do histórico de solicitações.',
    slug: 'notifications-history',
  },
  {
    title: 'Gestão de Múltiplas Localizações',
    description: 'Gerenciamento de várias unidades/filiais, centralizando avaliações e métricas.',
    slug: 'multi-location-management',
  },
  {
    title: 'Limites e Faturamento',
    description: 'Informações sobre planos, limites de uso, preços e faturamento.',
    slug: 'billing-limits',
  },
];

const KnowledgeBasePage: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Base de conhecimento</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar artigos..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {/* Search icon */}
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-5xl mb-4">👋</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Bem-vindo(a) ao seu Centro de Conhecimento</h2>
          <p className="text-lg text-gray-600">
            Um guia completo para ajudá-lo a dominar nossa plataforma e maximizar seu potencial.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => {
              const sectionCounts = [6, 3, 5, 4, 4, 4, 5, 5, 3, 5, 4, 5]; // This array should ideally be part of the article data
              const sectionCount = sectionCounts[index];
              return (
                <a
                  key={article.slug}
                  href={`https://knowledge-base.help/article/${article.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white overflow-hidden shadow rounded-lg p-6"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.102 1.101m-4.899.758l.758-.758" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{article.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{article.description}</p>
                      <p className="mt-2 text-sm text-gray-500">{sectionCount} seções</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          Precisa de ajuda? <a href="/contact" className="text-indigo-600 hover:text-indigo-500">Entre em contato com nossa equipe de suporte</a> para obter assistência.
        </div>
      </footer>
    </div>
  );
};

export default KnowledgeBasePage;
