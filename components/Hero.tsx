import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-magic-purple/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block p-1 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
          <div className="bg-white/5 rounded-full px-4 py-1 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-magic-glow" />
            <span className="text-xs md:text-sm font-header tracking-widest uppercase text-magic-glow">
              Bienvenido a la Ciudad de la Luz de las Estrellas
            </span>
          </div>
        </div>

        <h1 className="font-fantasy text-6xl md:text-8xl lg:text-9xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-star-silver to-slate-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-twinkle">
          Velaris Encantado
        </h1>

        <div className="max-w-2xl mx-auto space-y-6">
          <p className="font-body text-lg md:text-xl text-slate-300 leading-relaxed italic">
            "Donde la imaginación y el café se unen."
          </p>
          
          <div className="bg-night-blue/40 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-xl">
             <p className="font-body text-slate-300 mb-4">
              Velaris Encantado es un café de ambiente fantástico inspirado en mundos mágicos. Ofrece bebidas y postres artesanales en un espacio acogedor, ideal para jóvenes amantes de la fantasía.
            </p>
            <p className="font-body text-slate-300">
               Disfruta de eventos al estilo <strong>cosplay</strong> y <strong>clubs de lectura</strong>, un refugio perfecto para soñadores.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg font-header tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] text-white"
            >
              Ver Menú
            </button>
            <button 
              onClick={() => document.getElementById('reservations')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-magic-purple hover:bg-purple-600 rounded-lg font-header tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] text-white flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" /> Reservar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;