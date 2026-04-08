import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import type { Product } from '../interfaces/product';

interface Props {
    onAddToCart: (p: Product) => void;
}

export const ProductDetailPage = ({ onAddToCart }: Props) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return <div className="text-center mt-20">Producto no encontrado</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-4 animate-fade-in">
            <button
                onClick={() => navigate(-2)}
                className="cursor-pointer mb-8 flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-xl font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 transition-all active:scale-95 shadow-sm"
            >
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
                Volver a la tienda
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-4xl shadow-sm border border-gray-100">

                <div className="relative group overflow-hidden rounded-2xl bg-gray-50 h-100 flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-150 cursor-zoom-in"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-2">
                        Nuevo Lanzamiento
                    </span>
                    <h1 className="text-4xl font-black text-gray-900 mb-4">
                        {product.name}
                    </h1>
                    <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                        {product.description || "Un producto excepcional diseñado con la última tecnología de ALMA para ofrecerte el mejor rendimiento."}
                    </p>

                    <div className="flex items-center justify-between mb-8 bg-gray-50 p-6 rounded-2xl">
                        <div>
                            <p className="text-gray-400 text-sm font-medium">Precio Final</p>
                            <p className="text-3xl font-black text-indigo-600">{product.price.toFixed(2)}€</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-400 text-sm font-medium">Disponibilidad</p>
                            <p className="text-green-500 font-bold">En Stock ✅</p>
                        </div>
                    </div>

                    <button
                        onClick={() => onAddToCart(product)}
                        className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-100 transition-all active:scale-[0.98]"
                    >
                        Añadir a la cesta
                    </button>
                </div>
            </div>
        </div>
    );
};