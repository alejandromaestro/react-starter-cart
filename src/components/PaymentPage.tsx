import { Link } from 'react-router-dom';

export const PaymentPage = () => {
  return (
    <div className="max-w-md mx-auto mt-20 text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
        ✓
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Pedido realizado!</h2>
      <p className="text-gray-500 mb-8">
        Gracias por tu compra. Enviaremos los detalles de tu pedido a tu email:
      </p>
      <Link 
        to="/page/1" 
        className="inline-block w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all active:scale-95"
      >
        Volver a la tienda
      </Link>
    </div>
  );
};