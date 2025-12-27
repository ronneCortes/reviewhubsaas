import React from 'react';

// SVG Icons Otimizados
const CheckCircleIcon = () => (
  <svg className="w-12 h-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
  </svg>
);

const HeadsetIcon = () => (
  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const ThankYouPage: React.FC = () => {
  // Função para trackear conversão
  React.useEffect(() => {
    // Google Ads Conversion Tracking
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX/YYYYYYYYYYYY',
        'value': 1.0,
        'currency': 'BRL',
      });
    }

    // Facebook Pixel Conversion Tracking
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }

    // Redirecionamento para página principal após 10 segundos (opcional)
    const timeout = setTimeout(() => {
      console.log('Redirecionando para página principal...');
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex flex-col items-center justify-center p-4">
      {/* Meta tags para otimização SEO (devem ser adicionadas no Head do documento) */}
      <head>
        <title>Cadastro Concluído com Sucesso | ReviewHub</title>
        <meta name="description" content="Sua conta no ReviewHub foi criada com sucesso. Acesse seu e-mail para começar a coletar avaliações e aumentar suas vendas." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://seu-site.com/obrigado" />
      </head>

      {/* Pixel do Facebook */}
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=SEU_PIXEL_ID&ev=PageView&noscript=1"
        />
      </noscript>

      <div className="max-w-4xl w-full">
        {/* Header Principal com Logo */}
        <div className="text-center mb-6">
          <a href="/" className="inline-flex items-center group focus:outline-none mx-auto">
            <div className="text-white p-1.5 rounded-lg mr-2 shadow-sm  transition-colors">
              <img src="/icon.png" alt="Review Hub Logo" className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              Review Hub
            </span>
          </a>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Background Decorative */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full opacity-50 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 rounded-full opacity-50 blur-3xl" />
          </div>

          {/* Conteúdo Principal */}
          <div className="relative p-8 md:p-12">
            {/* Success Icon Section */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-30 animate-pulse" />
                <div className="relative flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full ring-8 ring-emerald-50">
                  <CheckCircleIcon />
                </div>
              </div>
            </div>

            {/* Header com Call-to-Action clara */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                🎉 Parabéns! Seu Cadastro Foi Concluído
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
                Em <span className="font-semibold text-indigo-600">5 minutos</span>, você receberá um e-mail com acesso completo à plataforma <span className="font-bold text-indigo-700">ReviewHub</span>.
              </p>
              
              {/* Value Proposition */}
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                Prepare-se para aumentar suas vendas em até 63% com avaliações
              </div>
            </div>

            {/* Timeline de Próximos Passos */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-8 text-center">
                Seu Caminho para Mais Vendas Começa Agora:
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Step 1 */}
                <div className="bg-gradient-to-b from-white to-slate-50 rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <MailIcon />
                    </div>
                    <div className="mb-3">
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">ETAPA 1</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-3 text-lg">Verifique Seu E-mail</h3>
                    <ul className="space-y-2 text-sm text-slate-600 text-left">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        Link de acesso exclusivo
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        Dados de login seguros
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        Guia rápido de início
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-gradient-to-b from-white to-slate-50 rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <RocketIcon />
                    </div>
                    <div className="mb-3">
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">ETAPA 2</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-3 text-lg">Configure em 5 Minutos</h3>
                    <ul className="space-y-2 text-sm text-slate-600 text-left">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        Conecte suas plataformas
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        Ative avaliações automáticas
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        Personalize mensagens
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-gradient-to-b from-white to-slate-50 rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <ChartIcon />
                    </div>
                    <div className="mb-3">
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">ETAPA 3</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-3 text-lg">Comece a Vender Mais</h3>
                    <ul className="space-y-2 text-sm text-slate-600 text-left">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        Receba avaliações 5 estrelas
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        Aumente conversões em 63%
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        Destaque-se da concorrência
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Box Otimizada */}
            <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200 rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <AlertIcon />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-amber-900 mb-2 text-lg">⚠️ Ainda não recebeu o e-mail?</h4>
                  <div className="space-y-2">
                    <p className="text-amber-800">
                      <strong>Siga este passo a passo rápido:</strong>
                    </p>
                    <ol className="list-decimal pl-5 text-sm text-amber-800 space-y-1">
                      <li>Verifique a caixa de SPAM</li>
                      <li>Olhe na aba "Promoções"</li>
                      <li>Aguarde 5-10 minutos</li>
                      <li>Adicione info@reviewhubsaas.com aos contatos</li>
                    </ol>
                  </div>
                </div>
                <a
                  href="mailto:info@reviewhubsaas.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Reenviar E-mail Agora
                </a>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="text-center mb-8">
              <a
                href="https://app.reviewhub.com/login"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:from-indigo-700 hover:to-indigo-800 transform hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => {
                  // Track CTA click
                  if (window.gtag) {
                    window.gtag('event', 'click', {
                      'event_category': 'CTA',
                      'event_label': 'Login_Button'
                    });
                  }
                }}
              >
                <HeadsetIcon />
                Acessar Minha Conta Agora
              </a>

            </div>



            {/* Footer com Links Úteis */}
            <div className="mt-10 text-center">

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="https://knowledge-base.help/" className="text-indigo-600 hover:text-indigo-800">
                  📚 Central de Ajuda
                </a>

                <a href="mailto:info@reviewhubsaas.com" className="text-indigo-600 hover:text-indigo-800">
                  📞 Contato
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Consent e Analytics */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} ReviewHub. Todos os direitos reservados.
            <a href="/politica-privacidade" className="ml-2 text-slate-500 hover:text-slate-700">
              Política de Privacidade
            </a>
            <span className="mx-2 text-slate-400">|</span>
            <a href="/termos-de-uso" className="text-slate-500 hover:text-slate-700">
              Termos de Uso
            </a>
            <span className="mx-2 text-slate-400">|</span>
            <a href="/politica-de-cookies" className="text-slate-500 hover:text-slate-700">
              Política de Cookies
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Declaração para TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default ThankYouPage;