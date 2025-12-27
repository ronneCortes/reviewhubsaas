import React from 'react';
import { Star, Twitter, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-50 border-t border-slate-200 pt-20 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-600 text-white p-1.5 rounded-lg mr-2">
                <Star size={20} fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-slate-900">Review Hub</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
              A plataforma completa de gestão de reputação. Colete avaliações, melhore o SEO e faça seu negócio crescer no piloto automático.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all shadow-sm" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all shadow-sm" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition-all shadow-sm" aria-label="GitHub">
                <Github size={18} />
              </a>
            </div> */}
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Produto</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#features" className="hover:text-indigo-600 transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-2 transition-all mr-0 group-hover:mr-1">-</span>Funcionalidades</a></li>
              <li><a href="#pricing" className="hover:text-indigo-600 transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-2 transition-all mr-0 group-hover:mr-1">-</span>Preços</a></li>
              <li><a href="https://reviewhubsaas.com/live-demo-review-hub" className="hover:text-indigo-600 transition-colors flex items-center group"><span className="w-0 overflow-hidden group-hover:w-2 transition-all mr-0 group-hover:mr-1">-</span>Demo Ao Vivo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Suporte</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="https://knowledge-base.help" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Base de Conhecimento</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Contato</a></li>
              <li><a href="https://app.reviewhubsaas.com/login" className="hover:text-indigo-600 transition-colors font-medium text-indigo-600">Entrar <ArrowRight size={12} className="inline ml-1"/></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/privacy-policy?tab=privacy" className="hover:text-indigo-600 transition-colors">Política de Privacidade</a></li>
              <li><a href="/privacy-policy?tab=terms" className="hover:text-indigo-600 transition-colors">Termos de Serviço</a></li>
              <li><a href="/privacy-policy?tab=cookies" className="hover:text-indigo-600 transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} ReviewHub SaaS. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer">
                <Mail size={16} />
                <span>info@reviewhubsaas.com</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};