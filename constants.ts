import { MenuItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Bebidas
  {
    id: 'b1',
    name: "Cafe Americano from Velaris",
    price: 1.50,
    description: "Cafe negro tradicional, fuerte y directo como la verdad de la corte.",
    category: 'bebida'
  },
  {
    id: 'b2',
    name: "Capuccino de la Corte Nocturna",
    price: 2.50,
    description: "Delicioso café artesanal con una rica espumosa leche tibia sabor a vainilla.",
    category: 'bebida'
  },
  {
    id: 'b3',
    name: "Latte Alas de Sombra",
    price: 2.75,
    description: "Bebida de café con espresso intenso y leche caliente suave.",
    category: 'bebida'
  },
  {
    id: 'b4',
    name: "Infusión Estelar",
    price: 1.75,
    description: "Bebida caliente y relajante, elaborada a base de hierbas naturales y frutos rojos.",
    category: 'bebida'
  },
  {
    id: 'b5',
    name: "Poción de Luna Azul",
    price: 2.25,
    description: "Bebida fría y refrescante, sin café, elaborada con infusión floral y notas cítricas suaves.",
    category: 'bebida'
  },
  // Postres
  {
    id: 'p1',
    name: "Pasteles Encantados",
    price: 3.75,
    description: "Postres artesanales elaborados con ingredientes frescos y decorados con detalles mágicos. Suaves, dulces y visualmente llamativos.",
    category: 'postre'
  },
  {
    id: 'p2',
    name: "Cheesecake Místico",
    price: 4.00,
    description: "Cheesecake cremoso de textura suave, con toque especial de vainilla y frutos rojos. Elegante y de dulzura equilibrada.",
    category: 'postre'
  },
  {
    id: 'p3',
    name: "Brownies Etéreos",
    price: 3.50,
    description: "Brownies de chocolate intenso, húmedos y esponjosos. Ligeros, delicados y reconfortantes.",
    category: 'postre'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Elara Nightshade",
    quote: "¡El ambiente es irreal! El Latte Alas de Sombra es mi nueva obsesión. Definitivamente volveré con mi aquelarre de lectura cada semana.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    role: "Lectora Frecuente"
  },
  {
    id: 2,
    name: "Cassian M.",
    quote: "Los brownies son tan buenos que podrían detener una guerra. Un lugar increíble para relajarse después de entrenar, la música es perfecta.",
    avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
    role: "Guerrero Ilirio"
  },
  {
    id: 3,
    name: "Nestha A.",
    quote: "Por fin un lugar con buen gusto y suficiente silencio para leer sin interrupciones tontas. El servicio es impecable y el té exquisito.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    role: "Amante de Libros"
  }
];