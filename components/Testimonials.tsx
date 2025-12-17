import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-magic-purple/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-night-blue/20 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-fantasy text-5xl md:text-6xl text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Susurros de la Corte
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <Star className="w-4 h-4 text-magic-purple" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-magic-glow to-transparent"></div>
            <Star className="w-4 h-4 text-magic-purple" />
          </div>
          <p className="font-body text-slate-300 max-w-2xl mx-auto">
            Lo que dicen los viajeros de las estrellas y soñadores que han encontrado refugio en nuestra ciudad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="relative group bg-night-deep/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-magic-purple/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(126,34,206,0.15)]"
            >
              <div className="absolute -top-4 -right-4 bg-night-deep border border-white/10 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 text-magic-glow fill-magic-glow/20" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-magic-purple/30 group-hover:border-magic-glow transition-colors">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-night-deep rounded-full p-1 border border-white/10">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
                <div>
                  <h4 className="font-header text-lg text-white group-hover:text-magic-glow transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="font-body text-xs text-slate-400 uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="font-body text-slate-300 italic leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;