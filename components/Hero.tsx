import React from 'react';
import { ChevronRight, Star, ShieldCheck, TrendingUp, Globe, Box, ExternalLink } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  onDemoClick?: () => void; // Kept for interface compatibility but unused for demo button now
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="hero" className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-slate-50">
      
      {/* Abstract background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-purple-200/30 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2 animate-pulse"></span>
              <span className="text-sm font-bold text-slate-700 tracking-wide uppercase">#1 Plataforma de Reputação</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
              Transforme Avaliações em <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Crescimento de Receita</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              Colete automaticamente avaliações 5 estrelas, gerencie sua reputação em mais de 200 sites e domine os resultados de pesquisa local.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
              <button 
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-1 flex items-center justify-center"
              >
                Teste Grátis
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              
              <a 
                href="https://reviewhubsaas.com/live-demo-review-hub"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 hover:text-indigo-600 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                Demo Ao Vivo
                <ExternalLink size={18} />
              </a>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map((i) => (
                   <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden`}>
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                   </div>
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">+2k</div>
               </div>
               <div className="flex flex-col text-left">
                 <div className="flex text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                 </div>
                 <span className="text-sm font-medium text-slate-500">Confiado por +2.000 empresas</span>
               </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="flex-1 w-full relative animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="relative group perspective-1000">
              {/* Main Hero Image from ReviewHub */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-slate-200/50 bg-white transform transition-transform duration-700 hover:scale-[1.02] hover:rotate-1">
                 <img 
                   src="https://reviewhubsaas.com/wp-content/uploads/2024/04/dashbord-desktop.png" 
                   alt="ReviewHub Dashboard" 
                   className="w-full h-auto"
                 />
                 
                 {/* Glass overlay effect on bottom */}
                 <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Decorative background blobs behind the image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float z-20 hidden md:flex">
                 <div className="bg-green-100 p-2.5 rounded-lg text-green-600">
                    <TrendingUp size={24} />
                 </div>
                 <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Crescimento</div>
                    <div className="font-bold text-slate-900 text-lg">+127% Avaliações</div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="border-t border-slate-200 pt-10">
           <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Impulsionando a Reputação De</p>
           <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex items-center space-x-2 font-bold text-xl text-slate-800"><Globe className="w-6 h-6 text-indigo-600" /> <span>GlobalTech</span></div>
               <div className="flex items-center space-x-2 font-bold text-xl text-slate-800"><Box className="w-6 h-6 text-indigo-600" /> <span>BoxyHQ</span></div>
               <div className="flex items-center space-x-2 font-bold text-xl text-slate-800"><TrendingUp className="w-6 h-6 text-indigo-600" /> <span>ScaleUp</span></div>
               <div className="flex items-center space-x-2 font-bold text-xl text-slate-800"><ShieldCheck className="w-6 h-6 text-indigo-600" /> <span>SecureNet</span></div>
               <div className="flex items-center space-x-2 font-bold text-xl text-slate-800"><Star className="w-6 h-6 text-indigo-600" /> <span>StarBrand</span></div>
           </div>
        </div>

      </div>
    </section>
  );
};