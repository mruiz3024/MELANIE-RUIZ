export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'bebida' | 'postre';
}

export interface GalleryItem {
  id: number;
  url: string;
  alt: string;
  size: 'small' | 'large' | 'tall';
}

export interface ReservationFormData {
  name: string;
  email: string;
  date: string;
  type: string;
  guests: number;
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  avatar: string;
  role?: string;
}