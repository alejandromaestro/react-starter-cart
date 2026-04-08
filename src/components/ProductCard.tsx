import { useNavigate } from 'react-router-dom';
import type { Product } from '../interfaces/product';

interface Props {
  product: Product,
  onAddToCart: (product: Product) => void
}

export const ProductCard = ({ product, onAddToCart }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:z-10 group cursor-pointer"
    >
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="cursor-pointer overflow-hidden rounded-xl mb-4 h-48 bg-gray-50"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-4">
        <h3
          className="text-lg font-extrabold text-gray-950 truncate cursor-pointer hover:text-indigo-600 transition-colors"
          title={product.name}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 h-10 mt-1">
          {product.description}
        </p>

        <div className="mt-6 flex justify-between items-center pt-2 border-t border-gray-100">
          <data value={product.price} className="text-xl font-bold text-indigo-700">
            {product.price}€
          </data>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors active:scale-95"
          >
            Añadir a la cesta
          </button>
        </div>
      </div>
    </div>
  );
};