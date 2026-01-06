import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  { 
    name: "Carlos Menezes", 
    role: "Dono de Restaurante – Sabor & Brasa Grill", 
    text: "Depois que começamos a usar o ReviewHub, nossa classificação no Google saltou de 4.1 para 4.6 em apenas algumas semanas. Os lembretes automatizados nos ajudaram a coletar avaliações que estávamos perdendo há anos. Os clientes confiam mais em nós e as reservas aumentaram notavelmente.",
    initials: "CM",
    color: "bg-orange-100 text-orange-600"
  },
  { 
    name: "Elena Rodriguez", 
    role: "Gerente de Hotel – BlueWave Boutique Hotel", 
    text: "Recebemos hóspedes de todo o mundo, e acompanhar as avaliações no Booking, Google e Airbnb era um pesadelo. O ReviewHub colocou tudo em um só lugar e nos ajudou a responder mais rápido. Nossa visibilidade nunca esteve melhor.",
    initials: "ER",
    color: "bg-blue-100 text-blue-600"
  },
  { 
    name: "Pastor João Martins", 
    role: "Líder Religioso – Igreja Vida Plena", 
    text: "Nossa igreja sempre recebeu feedback positivo, mas nada disso aparecia online. O ReviewHub tornou simples para membros e visitantes compartilharem suas experiências. Nossa presença online cresceu e mais famílias começaram a nos encontrar.",
    initials: "JM",
    color: "bg-green-100 text-green-600"
  },
  { 
    name: "Mariana Albuquerque", 
    role: "Dona de Escola de Dança – Studio Ritmo Brasil", 
    text: "Meus alunos adoram nossas aulas, mas eu tinha dificuldade em fazê-los deixar avaliações. O ReviewHub cuidou disso automaticamente. Agora atraímos novos alunos consistentemente todos os meses graças à nossa melhor classificação.",
    initials: "MA",
    color: "bg-purple-100 text-purple-600"
  },
  { 
    name: "Daniel Carter", 
    role: "Revendedor de Carros – AutoPrime Motors", 
    text: "Nesta indústria, confiança é tudo. Depois de usar o ReviewHub, coletamos mais de 150 novas avaliações em dois meses. Os compradores nos disseram que a razão pela qual nos escolheram foi por causa da nossa reputação online.",
    initials: "DC",
    color: "bg-red-100 text-red-600"
  },
  { 
    name: "Dr. Renata Silva", 
    role: "Dentista – Dr. Silva Odontologia", 
    text: "Costumávamos enviar mensagens manuais pedindo feedback, mas era inconsistente. Com o ReviewHub, nosso fluxo é automatizado e profissional. Novos pacientes mencionam constantemente nossas avaliações ao agendar sua primeira consulta.",
    initials: "RS",
    color: "bg-cyan-100 text-cyan-600"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">Depoimentos</h2>
           <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Histórias de Sucesso de Clientes Reais</h3>
           <p className="text-slate-500 max-w-2xl mx-auto">Junte-se às +1.000 empresas que assumiram o controle de sua reputação online.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(star => (
                      <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
              </div>
              <p className="text-slate-700 mb-8 text-lg leading-relaxed font-medium italic">"{t.text}"</p>
              <div className="flex items-center pt-6 border-t border-slate-200">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg ${t.color}`}>
                  {t.initials}
                </div>
                <div className="ml-4">
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};