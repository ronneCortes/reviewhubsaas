import React from 'react';
import { Share2, Zap, CheckCircle2, Star, Sparkles, ChevronDown, Smile, MoreHorizontal, ArrowRight, Instagram, Facebook, LayoutDashboard, Bell, BarChart3, Globe, MessageCircle, UserPlus, Send, Image as ImageIcon } from 'lucide-react';

interface ProductShowcaseProps {
  onTryFree: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onTryFree }) => {
  return (
    <section id="solutions" className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
           <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">Soluções Abrangentes</h2>
           <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Tudo Que Você Precisa Para Crescer</h3>
           <p className="text-lg text-slate-500">Da coleta automatizada às respostas com IA, nós temos tudo o que você precisa.</p>
        </div>

        {/* Feature 1: Social Proof / Widgets */}
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          {/* Visual Side */}
          <div className="lg:w-1/2 order-2 lg:order-1 relative group flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[500px] h-[500px]">
                
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl -z-10 opacity-60"></div>

                {/* Layer 1: The Desktop Widget Card (Background) */}
                <div className="absolute top-0 left-0 w-[90%] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 z-10 transform -rotate-2 transition-transform duration-500 hover:rotate-0">
                    {/* Header Sources */}
                    <div className="flex justify-center items-center gap-6 mb-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-[#1877F2] rounded-full p-1 text-white"><Facebook size={16} fill="currentColor" /></div>
                            <span className="font-bold text-slate-700 text-lg">4.4</span>
                            <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-white border border-slate-200 rounded-full p-1"><span className="text-slate-800 font-bold text-xs">G</span></div>
                            <span className="font-bold text-slate-700 text-lg">4.2</span>
                            <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        </div>
                    </div>
                    
                    <div className="text-center text-sm font-semibold text-slate-500 mb-6">289 Avaliações</div>

                    {/* Review Card */}
                    <div className="bg-white shadow-lg rounded-xl p-5 border border-slate-50 relative mb-6">
                        <div className="flex justify-between items-start mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                   <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Angela" className="w-full h-full object-cover"/>
                                </div>
                                <div>
                                    <div className="font-bold text-slate-800 text-sm">Angela B.</div>
                                    <div className="text-xs text-slate-400">2 Dias atrás</div>
                                </div>
                            </div>
                            <div className="text-[#1877F2]"><Facebook size={18} /></div>
                        </div>
                        <div className="flex text-yellow-400 mb-2">
                             {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Serviço excelente. Equipe simpática, mas ao mesmo tempo muito amigável e profissional, recomendo!
                        </p>
                    </div>

                    <button className="w-full py-3 rounded-full border border-slate-900 text-slate-900 font-bold hover:bg-slate-50 transition-colors">
                        Ver todas avaliações
                    </button>
                </div>

                {/* Layer 2: The Mobile Phone (Foreground) */}
                <div className="absolute bottom-0 right-0 w-[240px] md:w-[260px] bg-black rounded-[2.5rem] border-[8px] border-slate-900 overflow-hidden shadow-2xl z-20 transform translate-y-4 md:translate-x-4">
                    {/* Status Bar Mock */}
                    <div className="bg-white px-6 pt-3 pb-1 flex justify-between items-center text-[10px] font-bold text-slate-900">
                        <span>9:41</span>
                        <div className="flex gap-1">
                            <span className="h-2 w-2">Signal</span>
                            <span className="h-2 w-3 bg-black rounded-[1px]"></span>
                        </div>
                    </div>

                    {/* Instagram Header Mock */}
                    <div className="bg-white px-4 py-2 border-b border-slate-50 flex justify-between items-center">
                        <Instagram size={20} className="text-slate-800" />
                        <span className="font-bold text-sm font-serif italic">Instagram</span>
                        <Zap size={20} className="text-slate-800 rotate-12" />
                    </div>

                    {/* Stories Mock */}
                    <div className="bg-white p-3 flex gap-3 overflow-hidden border-b border-slate-50">
                        {[1,2,3].map(i => (
                             <div key={i} className="flex flex-col items-center gap-1 min-w-[45px]">
                                <div className="w-12 h-12 rounded-full border-2 border-pink-500 p-0.5">
                                    <div className="w-full h-full bg-slate-200 rounded-full overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${i+20}`} className="w-full h-full object-cover"/>
                                    </div>
                                </div>
                                <span className="text-[8px] text-slate-500">Story</span>
                             </div>
                        ))}
                    </div>

                    {/* Post Content Mock */}
                    <div className="bg-white p-4 pb-12">
                         <div className="flex items-center gap-2 mb-3">
                             <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">V</div>
                             <div className="flex flex-col">
                                 <span className="text-xs font-bold text-slate-900">Vita Veneziana</span>
                                 <span className="text-[9px] text-slate-400">Venezia</span>
                             </div>
                             <MoreHorizontal size={14} className="ml-auto text-slate-400" />
                         </div>

                         <div className="flex justify-center gap-1 mb-3 text-yellow-400">
                             {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                         </div>

                         <p className="text-center text-xs text-slate-700 leading-relaxed mb-4 px-2">
                             Serviço excelente. Equipe simpática, muito amigável e profissional, recomendo muito!
                         </p>

                         <div className="flex justify-center mb-4">
                             <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden">
                                 <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="w-full h-full object-cover"/>
                             </div>
                             <div className="flex flex-col justify-center ml-2">
                                 <span className="text-xs font-bold text-slate-800">Angela B.</span>
                             </div>
                         </div>
                    </div>
                </div>

             </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
              <Share2 size={12} /> Prova Social
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Melhore Sua Presença Digital com <br/>
              <span className="text-indigo-600">Avaliações que Importam</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Crie um carrossel dinâmico ou feed de avaliações e integre diretamente ao seu site — mostre a prova social que seus futuros clientes estão procurando.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               Planeje e agende posts com avaliações de clientes nas suas redes sociais e construa uma estratégia de marketing orientada por reputação que atrai, engaja e converte.
            </p>
            
            <button 
              onClick={onTryFree}
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-700 hover:-translate-y-1 transition-all"
            >
               Teste Grátis <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Feature 2: AI Responses */}
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-purple-100">
              <Zap size={12} /> Impulsionado por IA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Respostas de Avaliação <br/>
              <span className="text-purple-600">Com IA</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Personalize suas respostas em escala com a ajuda da inteligência artificial. Gere respostas profissionais, sem erros e com tom humano com apenas um clique.
            </p>
            
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="text-slate-700">Geração de resposta com um clique</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="text-slate-700">Tom e tamanho personalizáveis</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="text-slate-700">Entendimento de contexto humano</span>
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full flex flex-col items-center">
             <div className="relative w-full max-w-md">
                
                {/* Step 1: The Review Card */}
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-6 relative z-10 animate-fade-in-up">
                   <div className="flex items-center gap-2 mb-3">
                      <div className="bg-blue-600 p-1 rounded">
                        <span className="text-white text-xs font-bold">G</span>
                      </div>
                      <span className="text-slate-400 text-xs">Avaliação Google</span>
                   </div>
                   
                   <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600">SD</div>
                        <div>
                           <div className="font-bold text-slate-800 text-sm">Steve Dafoe</div>
                           <div className="text-[10px] text-slate-400">13 Jan, 2024</div>
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                         {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                      </div>
                   </div>
                   
                   <p className="text-slate-800 text-sm font-medium mb-4">
                      O melhor atendimento ao cliente e sugestões. Recomendo muito.
                   </p>
                   
                   <div className="flex gap-2">
                      <button className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-purple-200 transition-colors">
                        Responder
                      </button>
                      <button className="bg-slate-50 text-slate-500 px-4 py-1.5 rounded-full text-xs font-medium border border-slate-100">
                        Remover dos Widgets
                      </button>
                   </div>

                   {/* Dotted Arrow Indicator (Visual Connector) */}
                   <div className="absolute -bottom-12 left-12 w-24 h-24 pointer-events-none z-0 hidden md:block">
                      <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10 C 20 60, 80 10, 80 80" stroke="#22c55e" strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#arrowhead)" />
                        <defs>
                          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
                          </marker>
                        </defs>
                      </svg>
                   </div>
                </div>

                {/* Step 2: The AI Response Interface */}
                <div className="bg-white rounded-xl shadow-2xl border border-purple-100 p-6 relative z-20 mt-8 md:mt-12 md:ml-12 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                   <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-100 text-purple-600 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm">
                         <Sparkles size={12} fill="currentColor" /> Resposta IA
                      </div>
                      <button className="flex items-center gap-1 bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 shadow-sm">
                         Resposta Curta <ChevronDown size={12} />
                      </button>
                   </div>
                   
                   <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4">
                      <p className="text-slate-700 text-sm leading-relaxed">
                         Obrigado por nos recomendar! Estamos aqui para oferecer um excelente atendimento ao cliente e sugestões úteis.
                      </p>
                   </div>
                   
                   <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider mb-1">Inserir</span>
                        <span className="text-xs font-bold text-slate-400">Nome</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <Smile size={18} className="text-slate-400 hover:text-purple-600 cursor-pointer" />
                         <button className="bg-purple-600 text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 hover:-translate-y-0.5 transition-all">
                            Enviar
                         </button>
                      </div>
                   </div>
                </div>

             </div>
          </div>
        </div>

        {/* Feature 3: All-in-One Platform (Completely Recreated in CSS) */}
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Visual Side: CSS Mockups */}
          <div className="lg:w-1/2 order-2 lg:order-1 relative group w-full">
               
               {/* Container for the Composition */}
               <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-transparent perspective-1000">
                  
                  {/* --- 1. Background Dashboard (Desktop) --- */}
                  <div className="absolute inset-0 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex transform transition-transform duration-700 group-hover:rotate-1 group-hover:scale-[1.01]">
                      {/* Sidebar */}
                      <div className="w-16 md:w-48 bg-slate-900 h-full hidden sm:flex flex-col p-4 text-slate-300">
                          <div className="flex items-center gap-2 mb-8 text-white">
                              <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center"><Star size={14} fill="currentColor"/></div>
                              <span className="font-bold text-sm hidden md:block">ReviewHub</span>
                          </div>
                          <div className="space-y-4">
                              <div className="flex items-center gap-3 bg-slate-800 text-white p-2 rounded-lg cursor-pointer">
                                  <MessageCircle size={16} />
                                  <span className="text-xs font-medium hidden md:block">Avaliações</span>
                              </div>
                              <div className="flex items-center gap-3 p-2 hover:text-white cursor-pointer transition-colors">
                                  <LayoutDashboard size={16} />
                                  <span className="text-xs font-medium hidden md:block">Widgets</span>
                              </div>
                              <div className="flex items-center gap-3 p-2 hover:text-white cursor-pointer transition-colors">
                                  <BarChart3 size={16} />
                                  <span className="text-xs font-medium hidden md:block">Crescimento</span>
                              </div>
                          </div>
                      </div>

                      {/* Main Content Area */}
                      <div className="flex-1 bg-slate-50 flex flex-col h-full">
                          {/* Top Bar */}
                          <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6">
                              <div className="flex items-center gap-2 bg-slate-100 py-1.5 px-3 rounded-md border border-slate-200">
                                  <div className="w-4 h-4 rounded-full bg-orange-500 text-white text-[8px] flex items-center justify-center font-bold">R</div>
                                  <span className="text-xs font-semibold text-slate-700">Roma Business</span>
                                  <ChevronDown size={12} className="text-slate-400" />
                              </div>
                              <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 text-xs font-bold py-2 px-4 rounded-lg flex items-center gap-2 shadow-sm transition-colors">
                                  <Star size={12} fill="currentColor" /> Pedir Avaliações
                              </button>
                          </div>

                          {/* Dashboard Content */}
                          <div className="p-4 sm:p-6 space-y-4 overflow-hidden relative">
                              {/* Review Item 1 */}
                              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                  <div className="flex justify-between items-start mb-2">
                                      <div className="flex items-center gap-2">
                                          <div className="bg-white border border-slate-200 p-1 rounded-full"><span className="text-[10px] font-bold text-slate-700">G</span></div>
                                          <div className="flex text-yellow-400 space-x-0.5">
                                              {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                                          </div>
                                          <span className="text-[10px] text-slate-400">16 Março 2024</span>
                                      </div>
                                  </div>
                                  <div className="flex items-center gap-2 mb-2">
                                      <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                                      <span className="text-xs font-bold text-slate-800">Alex Rastani</span>
                                  </div>
                                  <p className="text-[10px] text-slate-600 leading-relaxed mb-3">
                                      A recepção foi ótima, parabéns a toda a equipe, com certeza voltarei!
                                  </p>
                                  <div className="flex gap-2">
                                      <button className="bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-md hover:bg-green-600">Responder</button>
                                      <button className="border border-slate-200 text-slate-500 text-[10px] font-medium px-3 py-1 rounded-md">Compartilhar</button>
                                  </div>
                              </div>

                              {/* Review Item 2 */}
                              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm opacity-70">
                                  <div className="flex justify-between items-start mb-2">
                                      <div className="flex items-center gap-2">
                                          <div className="bg-[#1877F2] p-1 rounded-full text-white"><Facebook size={8} fill="currentColor" /></div>
                                          <div className="flex text-yellow-400 space-x-0.5">
                                              {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                                          </div>
                                      </div>
                                  </div>
                                  <div className="flex items-center gap-2 mb-2">
                                      <div className="w-5 h-5 rounded-full bg-slate-200"></div>
                                      <span className="text-xs font-bold text-slate-800">Gianluca Simoni</span>
                                  </div>
                                  <p className="text-[10px] text-slate-600 leading-relaxed mb-3">
                                      Tivemos uma visita ontem e a experiência foi muito agradável.
                                  </p>
                                  <div className="bg-green-50 text-green-700 text-[10px] font-bold px-3 py-1 rounded-md inline-block">
                                      Respondido
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* --- 2. Top Right Floating Tooltip (Requests) --- */}
                  <div className="absolute top-10 right-4 sm:right-10 bg-white rounded-lg shadow-xl border border-slate-100 p-3 z-20 animate-fade-in-up w-48 hidden sm:block">
                      <div className="flex items-center gap-2 mb-3 text-[10px] text-slate-400 font-medium">
                          <UserPlus size={12} /> Adicionar contato
                      </div>
                      <div className="space-y-2">
                          {[
                              {n: "Tom Chinellato", s: "Solicitado", c: "text-orange-500"},
                              {n: "Albert Scarsi", s: "Convidado", c: "text-green-500"},
                              {n: "James Matta", s: "Solicitado", c: "text-orange-500"}
                          ].map((u, i) => (
                              <div key={i} className="flex justify-between items-center text-[10px]">
                                  <div className="flex items-center gap-1.5">
                                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                      <span className="text-slate-700 font-semibold">{u.n}</span>
                                  </div>
                                  <span className={`font-bold ${u.c} flex items-center gap-0.5`}>
                                      {u.s === 'Solicitado' && <Star size={8} fill="currentColor" />} {u.s}
                                  </span>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* --- 3. Bottom Left Phone (Widget) --- */}
                  <div className="absolute -bottom-6 -left-4 w-28 sm:w-36 bg-black rounded-[1.5rem] border-[4px] border-slate-800 overflow-hidden shadow-2xl z-30 transform hover:-translate-y-2 transition-transform duration-300">
                      <div className="bg-white h-full pb-4">
                          <div className="bg-slate-50 p-2 border-b border-slate-100 mb-2">
                              <div className="w-16 h-2 bg-slate-200 rounded-full mx-auto"></div>
                          </div>
                          <div className="px-2">
                              <div className="text-[8px] font-bold text-center mb-1">Nossos Clientes Dizem...</div>
                              <div className="flex justify-center gap-1 mb-2">
                                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-[6px]">f</div>
                                  <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[6px]">G</div>
                              </div>
                              <div className="bg-white border border-slate-100 rounded-lg p-2 shadow-sm">
                                  <div className="flex gap-1 mb-1">
                                      <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                                      <div className="h-1 w-10 bg-slate-200 rounded"></div>
                                  </div>
                                  <div className="space-y-0.5">
                                      <div className="h-0.5 w-full bg-slate-100 rounded"></div>
                                      <div className="h-0.5 w-full bg-slate-100 rounded"></div>
                                      <div className="h-0.5 w-2/3 bg-slate-100 rounded"></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* --- 4. Bottom Right Phone (Instagram Story) --- */}
                  <div className="absolute -bottom-10 -right-2 w-32 sm:w-40 bg-black rounded-[1.8rem] border-[6px] border-slate-800 overflow-hidden shadow-2xl z-30 transform hover:-translate-y-2 transition-transform duration-300">
                       <div className="bg-slate-800 h-full relative">
                           {/* Story Background */}
                           <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-900 opacity-90"></div>
                           <div className="relative p-3 h-full flex flex-col justify-center">
                               {/* The 'Sticker' */}
                               <div className="bg-white rounded-lg p-2 shadow-lg transform rotate-2">
                                   <div className="flex items-center gap-1 mb-1">
                                       <div className="w-4 h-4 bg-green-600 rounded flex items-center justify-center text-white font-bold text-[6px]">R</div>
                                       <span className="text-[6px] font-bold">Fisioterapia Rossi</span>
                                   </div>
                                   <div className="flex text-yellow-400 space-x-0.5 mb-1">
                                       {[1,2,3,4,5].map(i => <Star key={i} size={6} fill="currentColor" />)}
                                   </div>
                                   <p className="text-[6px] leading-tight text-slate-800 font-medium">
                                       "Pessoal altamente qualificado. Eu recomendo!"
                                   </p>
                               </div>
                               {/* IG UI Elements */}
                               <div className="absolute top-3 left-3 w-8 h-0.5 bg-white/30 rounded-full"></div>
                               <div className="absolute bottom-4 left-3 right-3 h-6 rounded-full border border-white/20 flex items-center px-2">
                                   <span className="text-[6px] text-white/50">Enviar mensagem...</span>
                               </div>
                           </div>
                       </div>
                  </div>

               </div>
               
               {/* Decorative background blob */}
               <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
               <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 order-1 lg:order-2">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-100">
               <LayoutDashboard size={12} /> Plataforma Tudo-em-Um
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
               Monitore Sua Reputação em <span className="text-indigo-600">+200 Sites</span>
             </h2>
             
             <div className="space-y-8 mt-8">
                {/* Item 1 */}
                <div className="flex group">
                   <div className="flex-shrink-0 mt-1">
                     <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                        <Globe className="w-5 h-5 text-indigo-600 group-hover:text-white" />
                     </div>
                   </div>
                   <div className="ml-5">
                     <h4 className="text-xl font-bold mb-2 text-slate-900">Dashboard Centralizado</h4>
                     <p className="text-slate-600 leading-relaxed">Visualize, rastreie e responda a avaliações do Google, Facebook, TripAdvisor, Booking.com e mais de 200 outras plataformas em um só lugar.</p>
                   </div>
                </div>

                {/* Item 2 */}
                <div className="flex group">
                   <div className="flex-shrink-0 mt-1">
                     <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                        <Bell className="w-5 h-5 text-indigo-600 group-hover:text-white" />
                     </div>
                   </div>
                   <div className="ml-5">
                     <h4 className="text-xl font-bold mb-2 text-slate-900">Alertas em Tempo Real</h4>
                     <p className="text-slate-600 leading-relaxed">Receba notificações instantâneas quando novas avaliações forem publicadas para que você possa agir rapidamente e proteger sua reputação.</p>
                   </div>
                </div>

                {/* Item 3 */}
                <div className="flex group">
                   <div className="flex-shrink-0 mt-1">
                     <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                        <BarChart3 className="w-5 h-5 text-indigo-600 group-hover:text-white" />
                     </div>
                   </div>
                   <div className="ml-5">
                     <h4 className="text-xl font-bold mb-2 text-slate-900">Insights Avançados e Relatórios</h4>
                     <p className="text-slate-600 leading-relaxed">Analise o sentimento do cliente, identifique tendências e meça o desempenho com análises fáceis de ler e dashboards visuais.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};