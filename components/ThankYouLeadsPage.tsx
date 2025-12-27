import React, { useState, useEffect } from 'react';

// SVG Icons Otimizados (melhor performance)
const CheckCircleIcon = () => (
  <svg className="w-12 h-12 text-emerald-600" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6 text-indigo-600" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-6 h-6 text-indigo-600" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6 text-indigo-600" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-5 h-5 text-amber-600" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
  </svg>
);

const HeadsetIcon = () => (
  <svg className="w-5 h-5 text-white" aria-hidden="true" focusable="false" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const ThankYouPage: React.FC = () => {
  const [countdown, setCountdown] = useState(300); // 5 minutos em segundos
  const [emailResent, setEmailResent] = useState(false);

  // Função para trackear conversão
  useEffect(() => {
    // Google Ads Conversion Tracking
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-XXXXXXXXX/YYYYYYYYYYYY',
        'value': 1.0,
        'currency': 'BRL',
        'transaction_id': `lead_${Date.now()}`,
      });
      
      // Enhanced Conversions para Google Ads
      window.gtag('config', 'AW-XXXXXXXXX', {
        'allow_enhanced_conversions': true
      });
    }

    // Facebook Pixel Conversion Tracking
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        value: 1.00,
        currency: 'BRL',
      });
      
      // Evento de ViewContent para remarketing
      window.fbq('track', 'ViewContent', {
        content_name: 'Thank You Page',
        content_category: 'Lead Conversion'
      });
    }

    // LinkedIn Insight Tag
    if (window.lintrk) {
      window.lintrk('track', { conversion_id: 123456 });
    }

    // Contador regressivo
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleResendEmail = () => {
    // Simular reenvio de e-mail
    setEmailResent(true);
    
    // Track resend event
    if (window.gtag) {
      window.gtag('event', 'generate_lead', {
        'event_category': 'Email',
        'event_label': 'Email_Resent'
      });
    }
    
    setTimeout(() => setEmailResent(false), 3000);
  };

  const handleCTAClick = (action: string) => {
    // Track CTA click
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'CTA',
        'event_label': action,
        'value': 1
      });
    }
    
    if (window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: action,
        content_type: 'product'
      });
    }
  };

  return (
    <>
      {/* SEO Meta Tags (devem estar no Head do documento) */}


      {/* Pixels de Remarketing */}
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=SEU_PIXEL_ID&ev=PageView&noscript=1"
          alt="Facebook Pixel"
        />
        <img height="1" width="1" style={{ display: 'none' }}
          src="https://px.ads.linkedin.com/collect/?pid=SEU_PID&fmt=gif"
          alt="LinkedIn Pixel"
        />
      </noscript>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex flex-col items-center justify-center p-4">
        <div className="max-w-5xl w-full">
          {/* Header com Logo e Valor Social */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center group focus:outline-none mx-auto mb-4">
              <div className="text-white p-1.5 rounded-lg mr-3 shadow-sm transition-colors">
                <img src="/icon.png" alt="Review Hub Logo" className="h-8 w-8" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors block">
                  Review Hub
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Plataforma de Avaliações #1 do Brasil
                </span>
              </div>
            </div>
            
            {/* Social Proof Banner */}
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 bg-indigo-100 border-2 border-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-indigo-600">✓</span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-slate-700 font-medium">
                <span className="font-bold text-indigo-600">3.247+</span> empresas já usam
              </span>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl shadow-2xl shadow-indigo-100/50 overflow-hidden border border-white/20">
            {/* Background Animado */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-60 blur-3xl animate-pulse" />
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full opacity-60 blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Conteúdo Principal */}
            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Contador Regressivo */}
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold tabular-nums">
                    {formatTime(countdown)}
                  </span>
                </div>
              </div>

              {/* Success Hero Section */}
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full blur-xl opacity-30 animate-pulse" />
                    <div className="relative flex items-center justify-center w-28 h-28 bg-gradient-to-br from-emerald-50 to-white rounded-full ring-8 ring-emerald-50/50 shadow-lg">
                      <CheckCircleIcon />
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  🚀 <span className="text-emerald-600">Parabéns!</span> Você Acaba de Dar Um Passo Gigante!
                </h1>
                
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-slate-700 leading-relaxed mb-8">
                    Em <span className="font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{formatTime(countdown)}</span> você receberá acesso completo à plataforma que vai <span className="font-bold text-emerald-600">transformar avaliações em vendas</span>.
                  </p>
                  
                  {/* Value Proposition em Destaque */}
                  <div className="inline-flex flex-wrap gap-3 justify-center mb-8">
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold border border-indigo-100">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                      +63% em conversões
                    </span>
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold border border-emerald-100">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                      94% satisfação
                    </span>
                    <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold border border-amber-100">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                      Configuração 5 min
                    </span>
                  </div>
                </div>
              </div>

              {/* Journey Map Interativo */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">
                  <span className="relative">
                    Sua Jornada Rumo ao Sucesso
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                  </span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8 relative">
                  {/* Linha de conexão */}
                  <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 -translate-y-1/2 z-0"></div>
                  
                  {/* Step 1 */}
                  <div className="relative bg-gradient-to-b from-white to-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 group z-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="relative">
                          <MailIcon />
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
                          ETAPA 1 • VERIFIQUE O E-MAIL
                        </span>
                      </div>
                      <h3 className="font-bold text-xl text-slate-900 mb-4">Acesso Imediato Liberado</h3>
                      <ul className="space-y-3 text-sm text-slate-600 text-left w-full">
                        {[
                          '📧 Link de acesso exclusivo enviado',
                          '🔑 Credenciais de login seguras',
                          '🎬 Vídeo tutorial de 3 minutos',
                          '📋 Checklist de configuração rápida'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative bg-gradient-to-b from-white to-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 group z-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="relative">
                          <RocketIcon />
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white"></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100">
                          ETAPA 2 • CONFIGURE EM 5 MIN
                        </span>
                      </div>
                      <h3 className="font-bold text-xl text-slate-900 mb-4">Ative Suas Avaliações</h3>
                      <ul className="space-y-3 text-sm text-slate-600 text-left w-full">
                        {[
                          '⚡ Conecte Google/Instagram em 1 clique',
                          '🎯 Configure pedidos automáticos',
                          '✏️ Personalize mensagens de solicitação',
                          '📊 Dashboard pronto para usar'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative bg-gradient-to-b from-white to-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 group z-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="relative">
                          <ChartIcon />
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white"></div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                          ETAPA 3 • CRESÇA COM AVALIAÇÕES
                        </span>
                      </div>
                      <h3 className="font-bold text-xl text-slate-900 mb-4">Transforme em Resultados</h3>
                      <ul className="space-y-3 text-sm text-slate-600 text-left w-full">
                        {[
                          '⭐ Receba avaliações 5 estrelas automaticamente',
                          '📈 Aumente visibilidade no Google',
                          '💰 Converta mais visitantes em clientes',
                          '🏆 Destaque-se da concorrência'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warning/Resend Section */}
              <div className="mb-12">
                <div className={`bg-gradient-to-r ${emailResent ? 'from-emerald-50 to-green-50 border-emerald-200' : 'from-amber-50 to-orange-50 border-amber-200'} rounded-2xl p-8 border-2 transition-all duration-500`}>
                  <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 ${emailResent ? 'bg-emerald-100' : 'bg-amber-100'} rounded-xl shadow-sm flex items-center justify-center`}>
                        {emailResent ? (
                          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <AlertIcon />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center lg:text-left">
                      <h4 className={`font-bold text-2xl mb-4 ${emailResent ? 'text-emerald-900' : 'text-amber-900'}`}>
                        {emailResent ? '✅ E-mail Reenviado com Sucesso!' : '⚠️ Ainda não recebeu o e-mail?'}
                      </h4>
                      
                      {!emailResent ? (
                        <>
                          <div className="space-y-3">
                            <p className="text-amber-800 font-medium">
                              Siga este passo a passo rápido:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-3 text-sm">
                              {[
                                '1. Verifique a caixa de SPAM',
                                '2. Olhe na aba "Promoções"',
                                '3. Aguarde 5-10 minutos',
                                '4. Adicione info@reviewhubsaas.com aos contatos'
                              ].map((step, index) => (
                                <div key={index} className="flex items-center gap-2 text-amber-700">
                                  <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-bold">
                                    {index + 1}
                                  </span>
                                  <span>{step.split('.').slice(1).join('.').trim()}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <p className="text-emerald-800 text-lg">
                          Acabamos de reenviar o e-mail para sua caixa de entrada. Verifique em 2-3 minutos!
                        </p>
                      )}
                    </div>
                    
                    <div className="flex-shrink-0">
                      <button
                        onClick={handleResendEmail}
                        disabled={emailResent}
                        className={`inline-flex items-center gap-3 px-8 py-4 ${emailResent ? 'bg-emerald-600 cursor-default' : 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700'} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap`}
                      >
                        {emailResent ? (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Reenviado!
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Reenviar E-mail Agora
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Principal com Tracking Avançado */}
              <div className="text-center mb-16">
                <div className="inline-block relative group">
                  {/* Elemento decorativo */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  
                  <a
                    href="https://app.reviewhub.com/login"
                    onClick={() => handleCTAClick('Primary_Login_Button')}
                    className="relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-indigo-500/30 hover:shadow-3xl hover:shadow-indigo-500/50 transform hover:-translate-y-1 transition-all duration-500 group-hover:from-indigo-700 group-hover:to-indigo-900"
                  >
                    <HeadsetIcon />
                    <div className="text-left">
                      <div className="text-base font-normal opacity-90">ACESSAR AGORA</div>
                      <div className="text-2xl">Minha Conta ReviewHub</div>
                    </div>
                    <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
                
                <p className="text-slate-600 mt-6 text-lg">
                  Ou ligue agora: <a href="tel:+5511999999999" className="font-bold text-indigo-700 hover:text-indigo-900">(11) 99999-9999</a>
                </p>
                
                {/* Micro-CTA Secundária */}
                <div className="mt-8">
                  <a
                    href="https://calendly.com/reviewhub/15min"
                    onClick={() => handleCTAClick('Schedule_Demo')}
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Agendar demonstração gratuita de 15 minutos
                  </a>
                </div>
              </div>

              {/* Trust Signals & Social Proof */}
              <div className="border-t border-slate-200 pt-12">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-8">
                    Empresas que confiam e crescem com a ReviewHub:
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {[
                      { name: 'Loja XPTO', growth: '+47%' },
                      { name: 'Serviços ABC', growth: '+68%' },
                      { name: 'Consultoria Pro', growth: '+52%' },
                      { name: 'Tech Solutions', growth: '+89%' }
                    ].map((company, index) => (
                      <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">{company.growth}</div>
                        <div className="text-sm text-slate-600 font-medium">{company.name}</div>
                        <div className="text-xs text-slate-500 mt-1">aumento em vendas</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Certificações e Segurança */}
                  <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span>SSL 256-bit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span>GDPR Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span>LGPD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <span>Suporte 24/7</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex flex-wrap justify-center gap-8">
                  <a href="https://knowledge-base.help/" className="group flex flex-col items-center">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-2 group-hover:bg-indigo-100 transition-colors">
                      <span className="text-2xl">📚</span>
                    </div>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-700">Central de Ajuda</span>
                  </a>
                  
                  <a href="mailto:contato@reviewhub.com" className="group flex flex-col items-center">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-2 group-hover:bg-indigo-100 transition-colors">
                      <span className="text-2xl">💬</span>
                    </div>
                    <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-700">Suporte Online</span>
                  </a>
                  

                  

                </div>
              </div>
            </div>
          </div>

          {/* Footer Legal */}
          <div className="mt-12 text-center">
            <p className="text-xs text-slate-500 mb-4">
              © {new Date().getFullYear()} ReviewHub. Todos os direitos reservados.
              CNPJ: 12.345.678/0001-99
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
              <a href="/privacy" className="hover:text-slate-700 transition-colors">
                Política de Privacidade
              </a>
              <span className="text-slate-300">•</span>
              <a href="/terms" className="hover:text-slate-700 transition-colors">
                Termos de Uso
              </a>
              <span className="text-slate-300">•</span>
              <a href="/cookies" className="hover:text-slate-700 transition-colors">
                Política de Cookies
              </a>
              <span className="text-slate-300">•</span>
              <a href="/gdpr" className="hover:text-slate-700 transition-colors">
                GDPR/LGPD
              </a>
            </div>
            
            {/* Performance Tracking */}
            <div className="mt-6 text-[10px] text-slate-400">
              Page loaded: {new Date().toLocaleTimeString()} • v2.1.4 • ID: {Date.now().toString(36)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Declaração para TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    lintrk?: (...args: any[]) => void;
  }
}

export default ThankYouPage;