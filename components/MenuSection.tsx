import React from 'react';
import { MENU_ITEMS } from '../constants';
import { Coffee, Cake } from 'lucide-react';

const MenuSection: React.FC = () => {
  const drinks = MENU_ITEMS.filter(item => item.category === 'bebida');
  const desserts = MENU_ITEMS.filter(item => item.category === 'postre');

  return (
    <section id="menu" className="py-20 relative">
        {/* Background Overlay */}
      <div className="absolute inset-0 bg-night-blue/20 backdrop-blur-sm pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-fantasy text-5xl md:text-6xl text-white mb-4">
            El Menú Real
          </h2>
          <p className="font-body text-slate-300">Sabores traídos de la Corte Nocturna</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Drinks Column */}
          <div className="bg-night-deep/60 p-8 rounded-2xl border border-white/5 shadow-[0_0_30px_rgba(126,34,206,0.1)]">
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <Coffee className="w-8 h-8 text-magic-glow" />
              <h3 className="font-header text-2xl text-white tracking-widest">Bebidas</h3>
            </div>
            
            <div className="space-y-8">
              {drinks.map(item => (
                <div key={item.id} className="group">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-header text-lg text-star-silver group-hover:text-magic-glow transition-colors">{item.name}</h4>
                    <span className="font-body font-bold text-magic-purple text-lg">${item.price.toFixed(2)}</span>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-2"></div>
                  <p className="font-body text-sm text-slate-400 italic leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts Column */}
          <div className="bg-night-deep/60 p-8 rounded-2xl border border-white/5 shadow-[0_0_30px_rgba(126,34,206,0.1)]">
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <Cake className="w-8 h-8 text-magic-glow" />
              <h3 className="font-header text-2xl text-white tracking-widest">Postres</h3>
            </div>
            
            <div className="space-y-8">
              {desserts.map(item => (
                <div key={item.id} className="group">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-header text-lg text-star-silver group-hover:text-magic-glow transition-colors">{item.name}</h4>
                    <span className="font-body font-bold text-magic-purple text-lg">${item.price.toFixed(2)}</span>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent mb-2"></div>
                  <p className="font-body text-sm text-slate-400 italic leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;