import React from 'react';
import { LegalPageLayout } from './LegalPageLayout';

const PrivacyContent: React.FC = () => (
  <div className="container mx-auto px-4 py-8 max-w-3xl">
    <h1 className="text-4xl font-bold text-slate-900 mb-6">Política de Privacidade para Review Hub</h1>
    <p className="text-sm text-slate-600 mb-8">Última atualização: 06/12/2025</p>

    <p className="mb-4 text-slate-700 leading-relaxed">
      Esta Política de Privacidade descreve como o ReviewHub ("o Software", "nós", "nosso") coleta, usa e compartilha informações pessoais de usuários que utilizam nossa plataforma. O ReviewHub é um software projetado para ajudar empresas locais a aprimorar sua reputação online através de vários recursos, como agregação de avaliações, respostas automatizadas a avaliações, campanhas de solicitação de avaliações, análises e automação de processos. Estamos comprometidos em cumprir todas as leis de proteção de dados aplicáveis, incluindo o Regulamento Geral de Proteção de Dados (GDPR) e a Lei de Privacidade do Consumidor da Califórnia (CCPA).
    </p>

    <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Dados Pessoais que Coletamos</h2>
    <p className="mb-4 text-slate-700 leading-relaxed">
      Coletamos os seguintes tipos de dados pessoais de nossos usuários:
    </p>
    <ul className="list-disc list-inside ml-4 mb-6 text-slate-700 leading-relaxed">
      <li><strong>Informações de identificação e contato:</strong> Nome, endereço de e-mail, endereço IP, número de telefone, credenciais de login.</li>
      <li><strong>Dados de uso da plataforma:</strong> Informações sobre avaliações, respostas enviadas pela plataforma, interações com o widget de avaliações, desempenho e análises de reputação.</li>
      <li><strong>Dados coletados através de automações e campanhas de solicitação de avaliações:</strong> Dados de usuários finais (clientes de empresas locais), incluindo nomes, endereços de e-mail, feedback privado, avaliações públicas, depoimentos em vídeo e informações enviadas através de landing pages.</li>
      <li><strong>Dados de navegação:</strong> Endereço IP, detalhes de uso da plataforma (incluindo cookies e tecnologias de rastreamento semelhantes).</li>
      <li><strong>Dados processados por inteligência artificial (IA):</strong> A IA é usada para gerar respostas automatizadas a avaliações. Os dados processados incluem o conteúdo das avaliações e quaisquer respostas geradas através de nossa plataforma.</li>
    </ul>

    <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Finalidades do Processamento de Dados</h2>
    <p className="mb-4 text-slate-700 leading-relaxed">
      Coletamos e processamos dados pessoais para as seguintes finalidades:
    </p>
    <ul className="list-disc list-inside ml-4 mb-6 text-slate-700 leading-relaxed">
      <li><strong>Agregação de avaliações:</strong> Coletamos avaliações de múltiplas plataformas (Google, Facebook, etc.) e as exibimos em uma interface unificada na plataforma.</li>
      <li><strong>Respostas automatizadas por IA:</strong> As avaliações podem ser respondidas automaticamente usando IA, que gera respostas com base no conteúdo das avaliações e parâmetros predefinidos.</li>
      <li><strong>Campanhas de solicitação de avaliações:</strong> Enviamos campanhas de e-mail para usuários finais (clientes de empresas locais) para incentivá-los a deixar avaliações ou enviar feedback privado e depoimentos em vídeo através de uma landing page.</li>
      <li><strong>Compartilhamento de avaliações:</strong> Compartilhamos as avaliações coletadas nos sites dos usuários através de widgets e em plataformas de mídia social, gerando imagens com base nas avaliações escritas.</li>
      <li><strong>Análises e relatórios:</strong> Fornecemos ferramentas de análise que permitem aos usuários monitorar sua reputação e o desempenho das campanhas de solicitação de avaliações.</li>
      <li><strong>Automação de processos:</strong> Automatizamos o envio de solicitações de avaliações através de fluxos de trabalho pré-configurados que os usuários podem configurar.</li>
    </ul>

    <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Base Legal para o Processamento de Dados</h2>
    <p className="mb-4 text-slate-700 leading-relaxed">
      De acordo com o GDPR, processamos os dados pessoais dos usuários com base nos seguintes fundamentos legais:
    </p>
    <ul className="list-disc list-inside ml-4 mb-6 text-slate-700 leading-relaxed">
      <li><strong>Consentimento:</strong> Para o envio de campanhas de e-mail e o uso de IA para respostas automatizadas a avaliações.</li>
      <li><strong>Execução de um contrato:</strong> Para fornecer os serviços oferecidos pelo ReviewHub conforme solicitado pelos usuários.</li>
      <li><strong>Obrigação legal:</strong> Quando somos obrigados a cumprir obrigações legais.</li>
      <li><strong>Interesses legítimos:</strong> Para melhorar nossos serviços, proteger a segurança da plataforma e monitorar a eficácia dos recursos da plataforma.</li>
    </ul>

    <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Direitos do Usuário (GDPR e CCPA)</h2>
    <p className="mb-4 text-slate-700 leading-relaxed">
      Os usuários do ReviewHub têm direitos específicos em relação aos seus dados pessoais, incluindo:
    </p>
    <ul className="list-disc list-inside ml-4 mb-6 text-slate-700 leading-relaxed">
      <li><strong>Direito de acesso:</strong> Os usuários têm o direito de solicitar informações sobre os dados pessoais que mantemos sobre eles.</li>
      <li><strong>Direito de retificação:</strong> Os usuários podem solicitar a correção de dados pessoais imprecisos ou incompletos.</li>
      <li><strong>Direito de apagamento (direito de ser esquecido):</strong> Os usuários podem solicitar a exclusão de seus dados pessoais.</li>
      <li><strong>Direito de restrição de processamento:</strong> Os usuários podem solicitar a limitação do processamento de seus dados pessoais em certos casos.</li>
      <li><strong>Direito à portabilidade dos dados:</strong> Os usuários têm o direito de receber uma cópia de seus dados em um formato estruturado, comumente usado e legível por máquina.</li>
      <li><strong>Direito de oposição:</strong> Os usuários podem se opor ao processamento de seus dados pessoais em certas circunstâncias.</li>
    </ul>
    <p className="mb-4 text-slate-700 leading-relaxed">
      De acordo com a CCPA, os residentes da Califórnia têm direitos adicionais, incluindo:
    </p>
    <ul className="list-disc list-inside ml-4 mb-6 text-slate-700 leading-relaxed">
      <li><strong>Direito de saber:</strong> Os consumidores da Califórnia podem solicitar detalhes sobre as categorias e dados pessoais específicos coletados, as finalidades do processamento e quaisquer terceiros com quem os dados são compartilhados.</li>
      <li><strong>Direito de optar por não participar:</strong> Os consumidores podem optar por não participar da venda de seus dados pessoais.</li>
      <li><strong>Direito de não discriminação:</strong> Os usuários não serão discriminados por exercer seus direitos sob a CCPA.</li>
    </ul>

    <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Compartilhamento de Dados</h2>
    <p className="mb-4 text-slate-700 leading-relaxed">
      Compartilhamos os dados pessoais dos usuários apenas nas seguintes circunstâncias:
    </p>
    <ul className="list-disc list-inside ml-4 mb-6 text-slate-700 leading-relaxed">
      <li><strong>Provedores de serviços:</strong> Compartilhamos dados com provedores de serviços terceirizados que nos auxiliam na entrega dos serviços (por exemplo, hospedagem, entrega de e-mail, ferramentas de análise).</li>
      <li><strong>Integrações de terceiros:</strong> O ReviewHub se integra a plataformas de terceiros (por exemplo, Google, Facebook) para coletar e exibir avaliações, bem como a redes sociais para compartilhar avaliações.</li>
      <li><strong>Obrigações legais:</strong> Podemos compartilhar dados pessoais quando exigido para cumprir obrigações legais ou para proteger os direitos e a segurança de nossos usuários ou do público.</li>
    </ul>

    <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Segurança dos Dados</h2>
    <p className="mb-4 text-slate-700 leading-relaxed">
      Implementamos medidas técnicas e organizacionais apropriadas para proteger os dados pessoais dos usuários contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum sistema é completamente seguro.
    </p>
  </div>
);

const TermsOfServiceContent: React.FC = () => (
  <div className="container mx-auto px-4 py-8 max-w-3xl">
    <h1 className="text-4xl font-bold text-slate-900 mb-6">Termos de Serviço para Review Hub</h1>
    <p className="text-sm text-slate-600 mb-8">Conteúdo dos Termos de Serviço será adicionado aqui.</p>
  </div>
);

const CookiePolicyContent: React.FC = () => (
  <div className="container mx-auto px-4 py-8 max-w-3xl">
    <h1 className="text-4xl font-bold text-slate-900 mb-6">Política de Cookies para Review Hub</h1>
    <p className="text-sm text-slate-600 mb-8">Conteúdo da Política de Cookies será adicionado aqui.</p>
  </div>
);

const PrivacyPolicyPage: React.FC = () => {
  const getInitialTab = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('tab') || 'privacy';
  };

  return (
    <LegalPageLayout
      initialTab={getInitialTab()}
      title="Políticas Legais"
      privacyContent={<PrivacyContent />}
      termsContent={<TermsOfServiceContent />}
      cookieContent={<CookiePolicyContent />}
    />
  );
};

export default PrivacyContent;
