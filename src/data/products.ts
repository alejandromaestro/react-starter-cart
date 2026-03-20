import type { Product } from '../interfaces/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Teclado Mecánico Pro",
    price: 89.99,
    description: "Switches brown, retroiluminación RGB y conexión USB-C.",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=500"
  },
  {
    id: 2,
    name: "Ratón Inalámbrico",
    price: 45.00,
    description: "Sensor óptico de alta precisión y batería de 40 horas.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=500"
  },
  {
    id: 3,
    name: "Monitor 27p 4K",
    price: 299.00,
    description: "Panel IPS con resolución Ultra HD y bordes mínimos.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500"
  }
];