import React from 'react';
import { GalleryItem } from '../types';

// Definimos las imágenes con una estructura específica para el collage
const IMAGES: GalleryItem[] = [
  { 
    id: 1, 
    // Barista (Izquierda Arriba)
    url: 'https://lh3.googleusercontent.com/u/0/d/1A3pBsGx6tCxWqBOau5oJPhd3KQuUWJyK', 
    alt: 'Barista Fae preparando café mágico', 
    size: 'tall' 
  },
  { 
    id: 2, 
    // Techo Galaxia (Centro Arriba)
    url: 'https://drive.google.com/thumbnail?id=1sxWb6xpnvrezof8lilKW9Cvj13nuMJcC&sz=w1000', 
    alt: 'Clientes disfrutando de la cafetería', 
    size: 'large' 
  },
  { 
    id: 3, 
    // Latte Art (Derecha Arriba)
    url: 'https://drive.google.com/thumbnail?id=1TwPSErkaKfPRYtZ4wjFwam7KXiTxa-DM&sz=w1000', 
    alt: 'Capuccino magico', 
    size: 'small' 
  },
  { 
    id: 4, 
    // Biblioteca/Lectura (Izquierda Abajo)
    url: 'https://drive.google.com/thumbnail?id=1EpCRToAgta2K6uRhogyAZkJrFi83nZ-n&sz=w1000', 
    alt: 'Club de Lectura', 
    size: 'large' 
  },
  { 
    id: 5, 
    // Mesa Cafe/Sign (Derecha Abajo) -> AHORA: Café con estrellas
    url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop', 
    alt: 'Cafe recien molido', 
    size: 'large' 
  },
];

const Gallery: React.FC = () => {
  // Función para determinar las clases del grid basado en la posición (index)
  // para imitar el collage: [1][ 2 ][3] / [  4  ][  5  ]
  const getGridClasses = (index: number) => {
    switch (index) {
      case 0: return 'md:col-span-1 md:row-span-1 h-64 md:h-80'; // Barista
      case 1: return 'md:col-span-2 md:row-span-1 h-64 md:h-80'; // Galaxia
      case 2: return 'md:col-span-1 md:row-span-1 h-64 md:h-80'; // Latte
      case 3: return 'md:col-span-2 md:row-span-1 h-64 md:h-80'; // Lectura
      case 4: return 'md:col-span-2 md:row-span-1 h-64 md:h-80'; // Cafe Estrellas
      default: return 'col-span-1 h-64';
    }
  };

  return (
    <section id="gallery" className="py-20 relative bg-gradient-to-b from-transparent to-night-deep/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-fantasy text-5xl md:text-6xl text-white mb-4 drop-shadow-md">
            La Corte de los Sueños
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-magic-purple to-transparent mx-auto"></div>
          <p className="font-body text-slate-300 mt-6 max-w-2xl mx-auto">
             Bajo un techo de polvo estelar y nebulosas, nuestros baristas preparan magia en cada taza. Un refugio eterno para lectores y soñadores.
          </p>
        </div>

        {/* Grid layout de 4 columnas para lograr la distribución: 1-2-1 arriba, 2-2 abajo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {IMAGES.map((img, index) => (
            <div 
              key={img.id}
              className={`relative overflow-hidden rounded-xl border border-white/10 group shadow-lg shadow-purple-900/10 transition-transform duration-500 hover:-translate-y-1 ${getGridClasses(index)}`}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-deep/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-header text-sm tracking-widest text-white drop-shadow-lg bg-black/60 px-3 py-1 rounded backdrop-blur-md border border-white/10">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;