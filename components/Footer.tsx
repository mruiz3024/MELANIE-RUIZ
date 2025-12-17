import React from 'react';
import { MapPin, Clock, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-night-deep border-t border-white/10 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          
          <div className="max-w-xs">
            <h3 className="font-fantasy text-4xl text-white mb-4">Velaris Encantado</h3>
            <p className="font-body text-slate-400 text-sm">
              Donde la magia se encuentra con el café. Un espacio seguro para soñadores, lectores y viajeros de las estrellas.
            </p>
          </div>

          <div className="grid gap-6">
            <h4 className="font-header text-xl text-magic-glow">Información</h4>
            
            <div className="flex items-start gap-3 text-slate-300">
              <MapPin className="w-5 h-5 text-magic-purple mt-1 shrink-0" />
              <div>
                <span className="block font-bold font-header text-white">Dirección</span>
                <span className="font-body">Avenida de los Sueños #7</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-slate-300">
              <Clock className="w-5 h-5 text-magic-purple mt-1 shrink-0" />
              <div>
                <span className="block font-bold font-header text-white">Horario</span>
                <span className="font-body">Martes a Domingo, 09:00 – 22:00</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-slate-300">
              <Mail className="w-5 h-5 text-magic-purple mt-1 shrink-0" />
              <div>
                <span className="block font-bold font-header text-white">Correo</span>
                <a href="mailto:magia@velarisencantado.com" className="font-body hover:text-magic-glow transition-colors">
                  magia@velarisencantado.com
                </a>
              </div>
            </div>
          </div>

          <div>
             <h4 className="font-header text-xl text-magic-glow mb-6">Síguenos</h4>
             <div className="flex gap-4">
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-magic-purple transition-all hover:-translate-y-1">
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-magic-purple transition-all hover:-translate-y-1">
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-magic-purple transition-all hover:-translate-y-1">
                  <Twitter className="w-6 h-6 text-white" />
                </a>
             </div>
             <p className="font-body text-slate-400 mt-4 text-sm">@VelarisEncantado</p>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-body text-slate-500 text-sm">
            © {new Date().getFullYear()} Velaris Encantado. Todos los derechos reservados. | Inspirado en el mundo de ACOTAR.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;