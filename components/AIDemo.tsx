import React from 'react';
import { Sparkles, Layout, MousePointerClick, ArrowRight, ExternalLink } from 'lucide-react';

export const AIDemo: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
               <Sparkles size={12} fill="currentColor" /> Preview Interativo
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Veja Nossos Widgets em <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Ação</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Não acredite apenas em nossa palavra. Visite nossa página de demonstração ao vivo para interagir com os widgets reais. Teste a responsividade, veja os diferentes layouts de feed e carrossel, e experimente como o ReviewHub se integra perfeitamente ao seu site.
            </p>
            
            <div className="space-y-6 mb-10">
               <div className="flex items-start">
                 <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                   <Layout size={20} />
                 </div>
                 <div className="ml-4">
                   <h4 className="text-lg font-bold text-slate-900">Layouts Variados</h4>
                   <p className="text-slate-500 text-sm">Visualize carrosséis, grades, listas e selos flutuantes.</p>
                 </div>
               </div>
               <div className="flex items-start">
                 <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                   <MousePointerClick size={20} />
                 </div>
                 <div className="ml-4">
                   <h4 className="text-lg font-bold text-slate-900">Totalmente Interativo</h4>
                   <p className="text-slate-500 text-sm">Clique, role e veja como os widgets se comportam em tempo real.</p>
                 </div>
               </div>
            </div>

            <a 
              href="https://reviewhubsaas.com/live-demo-review-hub"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-1 transition-all group"
            >
               Acessar Demo Completa <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Visual Showcase (Static Image representation of the Live Demo Page) */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-500">
               {/* Browser Mockup Header */}
               <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="bg-white px-3 py-1 rounded-md text-xs text-slate-400 flex-1 text-center font-medium mx-4 shadow-sm">
                     reviewhubsaas.com/live-demo
                  </div>
               </div>
               
               {/* Content Preview Image */}
               <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden">
                  <img 
                    src="https://reviewhubsaas.com/wp-content/uploads/2024/04/dashbord-desktop.png" 
                    alt="Live Demo Preview" 
                    className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  
                  {/* Overlay CTA */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 group-hover:bg-slate-900/5 transition-colors">
                      <a 
                        href="https://reviewhubsaas.com/live-demo-review-hub"
                        className="bg-white/90 backdrop-blur-sm text-slate-900 px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-white hover:scale-105 transition-all cursor-pointer"
                      >
                         <ExternalLink size={18} /> Ver Demo
                      </a>
                  </div>
               </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block animate-float">
               <div className="flex items-center gap-3">
                  <div className="flex text-yellow-400">
                     {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                  </div>
                  <span className="font-bold text-slate-800">4.9/5</span>
               </div>
               <div className="text-xs text-slate-500 mt-1">Classificação Média</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};