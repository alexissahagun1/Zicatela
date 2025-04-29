export interface Property {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  location: string;
  image: string;
  amenities: string[];
  available: boolean;
  calendarId: string;
}

export const properties: Property[] = [
  {
    id: '1',
    slug: 'casa-sol',
    name: 'Casa Sol',
    description: 'Una impresionante villa de lujo con vista panorámica al océano Pacífico. Esta propiedad de 5 habitaciones cuenta con piscina infinita, terraza privada y acceso directo a la playa. Perfecta para familias grandes o grupos que buscan una experiencia exclusiva en Zicatela.',
    shortDescription: 'Villa de lujo con vista panorámica al océano',
    price: 1500,
    location: 'Zicatela, Oaxaca',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf',
    amenities: [
      'Piscina infinita',
      'Wi-Fi de alta velocidad',
      'Chef privado disponible',
      'Terraza panorámica',
      'Acceso directo a la playa',
      '5 habitaciones',
      'Aire acondicionado',
      'Estacionamiento privado'
    ],
    available: true,
    calendarId: 'zicatela/casa-sol'
  },
  {
    id: '2',
    slug: 'villa-verde',
    name: 'Villa Verde',
    description: 'Elegante residencia contemporánea rodeada de exuberante vegetación tropical. Esta propiedad de 4 habitaciones ofrece privacidad total, jardín privado y una terraza con jacuzzi. Ideal para quienes buscan una escapada tranquila y sofisticada.',
    shortDescription: 'Residencia contemporánea con jardín privado',
    price: 1800,
    location: 'Zicatela, Oaxaca',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
    amenities: [
      'Jacuzzi privado',
      'Jardín tropical',
      'Wi-Fi de alta velocidad',
      '4 habitaciones',
      'Cocina gourmet',
      'Seguridad 24/7',
      'Servicio de limpieza diario',
      'Estacionamiento privado'
    ],
    available: true,
    calendarId: 'zicatela/villa-verde'
  },
  {
    id: '3',
    slug: 'casa-mar',
    name: 'Casa Mar',
    description: 'Exclusiva propiedad frente al mar con diseño arquitectónico único. Esta villa de 6 habitaciones ofrece vistas espectaculares, amplios espacios sociales y todas las comodidades de un hotel de lujo en un entorno privado.',
    shortDescription: 'Villa exclusiva frente al mar con diseño único',
    price: 2000,
    location: 'Zicatela, Oaxaca',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    amenities: [
      'Vista al mar',
      'Piscina infinita',
      'Wi-Fi de alta velocidad',
      '6 habitaciones',
      'Sala de cine',
      'Gimnasio privado',
      'Servicio de conserjería',
      'Estacionamiento privado'
    ],
    available: true,
    calendarId: 'zicatela/casa-mar'
  }
]; 