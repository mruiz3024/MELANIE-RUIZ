import React, { useState } from 'react';
import { Users, PartyPopper } from 'lucide-react';
import { ReservationFormData } from '../types';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    date: '',
    type: 'Lectura',
    guests: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="reservations" className="py-20 bg-gradient-to-t from-night-blue/30 to-transparent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="font-fantasy text-5xl md:text-6xl text-white">
              Reserva tu Momento Mágico
            </h2>
            <p className="font-body text-slate-300 text-lg leading-relaxed">
              Ya sea para un club de lectura bajo las estrellas artificiales, una reunión de cosplay o una celebración privada, Velaris Encantado abre sus puertas para ti.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="bg-magic-purple/20 p-3 rounded-full text-magic-glow">
                  <PartyPopper size={24} />
                </div>
                <div>
                  <h4 className="font-header text-white">Eventos Temáticos</h4>
                  <p className="text-sm text-slate-400">Cosplay, Noches de Trivia, Cumpleaños</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="bg-magic-purple/20 p-3 rounded-full text-magic-glow">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-header text-white">Club de Lectura</h4>
                  <p className="text-sm text-slate-400">Espacio reservado y silencioso para grupos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 animate-fade-in">
                <Sparkles className="w-16 h-16 text-magic-glow mx-auto mb-4" />
                <h3 className="font-header text-2xl text-white mb-2">¡Solicitud Enviada!</h3>
                <p className="font-body text-slate-300">Un cuervo mensajero te contactará pronto para confirmar tu velada.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-header text-sm text-star-silver mb-2">Nombre del Soñador</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-night-deep/50 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-magic-purple focus:ring-1 focus:ring-magic-purple transition-all"
                    placeholder="Feyre Archeron"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-header text-sm text-star-silver mb-2">Fecha</label>
                    <div className="relative">
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-night-deep/50 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-magic-purple"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-header text-sm text-star-silver mb-2">Invitados</label>
                    <input
                      type="number"
                      name="guests"
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-night-deep/50 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-magic-purple"
                    />
                  </div>
                </div>

                <div>
                   <label className="block font-header text-sm text-star-silver mb-2">Tipo de Evento</label>
                   <select 
                      name="type" 
                      value={formData.type} 
                      onChange={handleChange}
                      className="w-full bg-night-deep/50 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-magic-purple"
                   >
                     <option value="Lectura">Club de Lectura</option>
                     <option value="Cumpleaños">Cumpleaños</option>
                     <option value="Cosplay">Reunión Cosplay</option>
                     <option value="Otro">Otro Festejo</option>
                   </select>
                </div>

                <div>
                  <label className="block font-header text-sm text-star-silver mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-night-deep/50 border border-white/20 rounded-lg p-3 text-white focus:outline-none focus:border-magic-purple"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-magic-purple to-indigo-600 text-white font-header py-3 rounded-lg shadow-lg shadow-purple-900/40 hover:scale-[1.02] transition-transform"
                >
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

// Simple Sparkles component for the success message to avoid import error if lucide is tree-shaken weirdly
const Sparkles = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" /><path d="M9 5H5" /><path d="M3 7V3" /><path d="M7 9V5" />
  </svg>
);

export default Reservations;